import sharp from 'sharp';
import fs from 'fs';

async function generateCleanCutout() {
  const inputPath = 'Logo/75482aee-675d-4ef5-80fe-4e2cec0cc534.png';
  const outputPath = 'public/jigyasa_transparent.png';

  const image = sharp(inputPath);
  const metadata = await image.metadata();

  const { data, info } = await image
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;

  function getPixel(x, y) {
    const idx = (y * width + x) * channels;
    return [data[idx], data[idx + 1], data[idx + 2], data[idx + 3]];
  }

  function isDarkBackground(r, g, b) {
    const lum = 0.299 * r + 0.587 * g + 0.114 * b;
    const maxVal = Math.max(r, g, b);
    const isJacket = g > r + 20 && g > 40;
    const isSkin = r > 70 && g > 40;
    if (isJacket || isSkin) return false;

    return lum < 38 && maxVal < 55;
  }

  const visited = new Uint8Array(width * height);
  const isBg = new Uint8Array(width * height);
  const queue = [];

  // Seed top edge
  for (let x = 0; x < width; x++) {
    const p = getPixel(x, 0);
    if (isDarkBackground(p[0], p[1], p[2])) {
      visited[x] = 1;
      isBg[x] = 1;
      queue.push(x);
    }
  }

  // Seed left and right edges down to upper jacket
  for (let y = 0; y < Math.floor(height * 0.85); y++) {
    const pL = getPixel(0, y);
    const idxL = y * width;
    if (!visited[idxL] && isDarkBackground(pL[0], pL[1], pL[2])) {
      visited[idxL] = 1;
      isBg[idxL] = 1;
      queue.push(idxL);
    }

    const pR = getPixel(width - 1, y);
    const idxR = y * width + (width - 1);
    if (!visited[idxR] && isDarkBackground(pR[0], pR[1], pR[2])) {
      visited[idxR] = 1;
      isBg[idxR] = 1;
      queue.push(idxR);
    }
  }

  // BFS flood fill
  let head = 0;
  while (head < queue.length) {
    const curr = queue[head++];
    const cx = curr % width;
    const cy = Math.floor(curr / width);

    const neighbors = [
      [cx - 1, cy],
      [cx + 1, cy],
      [cx, cy - 1],
      [cx, cy + 1],
    ];

    for (const [nx, ny] of neighbors) {
      if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
        const nIdx = ny * width + nx;
        if (!visited[nIdx]) {
          visited[nIdx] = 1;
          const pxIdx = nIdx * channels;
          const r = data[pxIdx];
          const g = data[pxIdx + 1];
          const b = data[pxIdx + 2];

          if (isDarkBackground(r, g, b)) {
            isBg[nIdx] = 1;
            queue.push(nIdx);
          }
        }
      }
    }
  }

  // Apply transparency to background and smooth edges directly in buffer
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = y * width + x;
      const pxIdx = idx * channels;

      if (isBg[idx]) {
        data[pxIdx + 3] = 0;
      } else {
        // Edge feathering: check 8 surrounding neighbors for background
        let bgNeighbors = 0;
        for (let dy = -1; dy <= 1; dy++) {
          for (let dx = -1; dx <= 1; dx++) {
            if (dx === 0 && dy === 0) continue;
            const nx = x + dx;
            const ny = y + dy;
            if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
              if (isBg[ny * width + nx]) {
                bgNeighbors++;
              }
            }
          }
        }

        if (bgNeighbors > 0) {
          const r = data[pxIdx];
          const g = data[pxIdx + 1];
          const b = data[pxIdx + 2];
          const lum = 0.299 * r + 0.587 * g + 0.114 * b;

          // If it's a dark edge pixel near background, feather alpha
          if (lum < 50) {
            const alphaFactor = (1 - (bgNeighbors / 8) * 0.5) * (lum / 50);
            data[pxIdx + 3] = Math.max(0, Math.min(255, Math.round(255 * alphaFactor)));
          }
        }
      }
    }
  }

  await sharp(data, { raw: { width, height, channels } })
    .png({ compressionLevel: 8 })
    .toFile(outputPath);

  fs.copyFileSync(outputPath, 'src/assets/jigyasa_transparent.png');
  fs.copyFileSync(outputPath, 'public/jigyasa.png');
  fs.copyFileSync(outputPath, 'src/assets/jigyasa.png');

  console.log('Clean cutout successfully saved to:', outputPath);
}

generateCleanCutout().catch(console.error);

import sharp from 'sharp';
import fs from 'fs';

async function processNewPhoto() {
  const inputPath = 'Logo/8f5f5e3c-5a96-432a-b3fc-0097defd029b.png';
  const outputPath = 'public/jigyasa_hero.png';

  const image = sharp(inputPath);
  const metadata = await image.metadata();
  console.log(`Processing new photo: ${metadata.width}x${metadata.height}`);

  const { data, info } = await image
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;

  function getPixel(x, y) {
    const idx = (y * width + x) * channels;
    return [data[idx], data[idx + 1], data[idx + 2], data[idx + 3]];
  }

  console.log('Top-left (0,0):', getPixel(0, 0));
  console.log('Top-right (w-1,0):', getPixel(width - 1, 0));
  console.log('Top-mid (w/2,0):', getPixel(Math.floor(width / 2), 0));

  // Check if pixel is white / light background
  function isWhiteBackground(r, g, b) {
    const minVal = Math.min(r, g, b);
    const lum = 0.299 * r + 0.587 * g + 0.114 * b;
    // White or off-white background
    return minVal > 225 && lum > 230;
  }

  const visited = new Uint8Array(width * height);
  const isBg = new Uint8Array(width * height);
  const queue = [];

  // Seed top edge
  for (let x = 0; x < width; x++) {
    const p = getPixel(x, 0);
    if (isWhiteBackground(p[0], p[1], p[2])) {
      visited[x] = 1;
      isBg[x] = 1;
      queue.push(x);
    }
  }

  // Seed left and right edges
  for (let y = 0; y < height; y++) {
    // left edge
    const pL = getPixel(0, y);
    const idxL = y * width;
    if (!visited[idxL] && isWhiteBackground(pL[0], pL[1], pL[2])) {
      visited[idxL] = 1;
      isBg[idxL] = 1;
      queue.push(idxL);
    }

    // right edge
    const pR = getPixel(width - 1, y);
    const idxR = y * width + (width - 1);
    if (!visited[idxR] && isWhiteBackground(pR[0], pR[1], pR[2])) {
      visited[idxR] = 1;
      isBg[idxR] = 1;
      queue.push(idxR);
    }
  }

  console.log(`Starting BFS with ${queue.length} seed pixels...`);

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

          if (isWhiteBackground(r, g, b)) {
            isBg[nIdx] = 1;
            queue.push(nIdx);
          }
        }
      }
    }
  }

  console.log(`Total background pixels: ${queue.length} (${((queue.length / (width * height)) * 100).toFixed(1)}%)`);

  // Edge feathering and transparency
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = y * width + x;
      const pxIdx = idx * channels;

      if (isBg[idx]) {
        data[pxIdx + 3] = 0;
      } else {
        // Feather near background
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

          // If it's a bright edge pixel near white background, fade alpha to remove halo
          if (lum > 200) {
            const factor = Math.max(0, (245 - lum) / 45);
            data[pxIdx + 3] = Math.round(255 * factor);
          }
        }
      }
    }
  }

  await sharp(data, { raw: { width, height, channels } })
    .png({ compressionLevel: 8 })
    .toFile(outputPath);

  fs.copyFileSync(outputPath, 'src/assets/jigyasa_hero.png');
  fs.copyFileSync(outputPath, 'public/jigyasa_transparent.png');
  fs.copyFileSync(outputPath, 'src/assets/jigyasa_transparent.png');

  console.log('Successfully saved transparent new photo to:', outputPath);
}

processNewPhoto().catch(console.error);

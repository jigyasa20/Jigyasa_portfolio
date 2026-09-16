import sharp from 'sharp';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

async function createBanner() {
  const width = 1200;
  const height = 630;
  
  // Load Jigyasa portrait cutout
  const portraitPath = path.join(rootDir, 'src', 'assets', 'jigyasa_hero.png');
  const portraitResized = await sharp(portraitPath)
    .resize({ height: 580, fit: 'contain' })
    .toBuffer();
    
  const portraitMeta = await sharp(portraitResized).metadata();

  // SVG overlay for background, glow, typography, and badges
  const svgOverlay = Buffer.from(`
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#070709" />
          <stop offset="50%" stop-color="#0F0916" />
          <stop offset="100%" stop-color="#070709" />
        </linearGradient>
        <radialGradient id="purpleGlow" cx="80%" cy="50%" r="55%">
          <stop offset="0%" stop-color="#B600A8" stop-opacity="0.32" />
          <stop offset="45%" stop-color="#7621B0" stop-opacity="0.14" />
          <stop offset="80%" stop-color="#070709" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="leftGlow" cx="15%" cy="30%" r="40%">
          <stop offset="0%" stop-color="#FF007A" stop-opacity="0.1" />
          <stop offset="100%" stop-color="#070709" />
        </radialGradient>
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF" />
          <stop offset="60%" stop-color="#E2E8F0" />
          <stop offset="100%" stop-color="#94A3B8" />
        </linearGradient>
      </defs>

      <!-- Backgrounds -->
      <rect width="${width}" height="${height}" fill="url(#bgGradient)" />
      <rect width="${width}" height="${height}" fill="url(#purpleGlow)" />
      <rect width="${width}" height="${height}" fill="url(#leftGlow)" />

      <!-- Subtle Grid Lines -->
      <g stroke="rgba(255,255,255,0.035)" stroke-width="1">
        <line x1="80" y1="0" x2="80" y2="630" />
        <line x1="380" y1="0" x2="380" y2="630" />
        <line x1="680" y1="0" x2="680" y2="630" />
        <line x1="0" y1="90" x2="1200" y2="90" />
        <line x1="0" y1="330" x2="1200" y2="330" />
        <line x1="0" y1="520" x2="1200" y2="520" />
      </g>

      <!-- Eyebrow Badge -->
      <g transform="translate(80, 75)">
        <rect width="360" height="36" rx="18" fill="rgba(255, 160, 197, 0.12)" stroke="rgba(255, 160, 197, 0.35)" stroke-width="1" />
        <text x="20" y="23" font-family="Arial, Helvetica, sans-serif" font-size="12" font-weight="700" letter-spacing="2" fill="#FFA0C5">
          ✦ CONTENT, GROWTH &amp; STORYTELLING
        </text>
      </g>

      <!-- Big Bold Name -->
      <text x="80" y="205" font-family="Arial Black, Impact, sans-serif" font-size="94" font-weight="900" letter-spacing="-2" fill="url(#textGradient)">
        JIGYASA
      </text>

      <!-- Tagline Hook -->
      <text x="80" y="255" font-family="Arial, Helvetica, sans-serif" font-size="21" font-weight="400" fill="#E2E8F0">
        Turning real-world stories and Web3 culture into
      </text>
      <text x="80" y="288" font-family="Arial, Helvetica, sans-serif" font-size="21" font-weight="400" fill="#CBD5E1">
        content people actually watch and share.
      </text>

      <!-- Skill Pills -->
      <g transform="translate(80, 335)">
        <!-- Pill 1 -->
        <g transform="translate(0, 0)">
          <rect width="145" height="38" rx="12" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.15)" stroke-width="1" />
          <text x="18" y="24" font-family="Arial, sans-serif" font-size="13" font-weight="700" fill="#FFFFFF">Video Content</text>
        </g>
        <!-- Pill 2 -->
        <g transform="translate(155, 0)">
          <rect width="155" height="38" rx="12" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.15)" stroke-width="1" />
          <text x="18" y="24" font-family="Arial, sans-serif" font-size="13" font-weight="700" fill="#FFFFFF">Growth Strategy</text>
        </g>
        <!-- Pill 3 -->
        <g transform="translate(320, 0)">
          <rect width="130" height="38" rx="12" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.15)" stroke-width="1" />
          <text x="18" y="24" font-family="Arial, sans-serif" font-size="13" font-weight="700" fill="#FFFFFF">IRL Events</text>
        </g>
        <!-- Pill 4 -->
        <g transform="translate(460, 0)">
          <rect width="130" height="38" rx="12" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.15)" stroke-width="1" />
          <text x="18" y="24" font-family="Arial, sans-serif" font-size="13" font-weight="700" fill="#FFFFFF">CT &amp; Web3</text>
        </g>
      </g>

      <!-- Bottom Handles / Stats Card -->
      <g transform="translate(80, 455)">
        <rect width="560" height="80" rx="20" fill="rgba(18, 18, 22, 0.9)" stroke="rgba(255,255,255,0.12)" stroke-width="1" />
        
        <!-- Metric 1 -->
        <text x="32" y="38" font-family="Courier New, monospace" font-size="20" font-weight="800" fill="#FFFFFF">5.2M+</text>
        <text x="32" y="58" font-family="Arial, sans-serif" font-size="11" font-weight="700" letter-spacing="1" fill="#94A3B8">TOTAL REACH</text>

        <!-- Divider -->
        <line x1="160" y1="20" x2="160" y2="60" stroke="rgba(255,255,255,0.12)" />

        <!-- Metric 2 -->
        <text x="190" y="38" font-family="Courier New, monospace" font-size="20" font-weight="800" fill="#FFFFFF">7.8K+</text>
        <text x="190" y="58" font-family="Arial, sans-serif" font-size="11" font-weight="700" letter-spacing="1" fill="#94A3B8">COMMUNITY</text>

        <!-- Divider -->
        <line x1="320" y1="20" x2="320" y2="60" stroke="rgba(255,255,255,0.12)" />

        <!-- Social Handles -->
        <text x="350" y="38" font-family="Arial, sans-serif" font-size="13" font-weight="700" fill="#38BDF8">X: @jigyasa_0203</text>
        <text x="350" y="58" font-family="Arial, sans-serif" font-size="12" font-weight="600" fill="#FFA0C5">YT: @StoriesbyRaahi</text>
      </g>

      <!-- Glowing border frame -->
      <rect x="1" y="1" width="1198" height="628" fill="none" stroke="rgba(182, 0, 168, 0.45)" stroke-width="2" />
    </svg>
  `);

  const bg = await sharp(svgOverlay).png().toBuffer();

  // Composite portrait on the right side
  const finalPng = await sharp(bg)
    .composite([
      {
        input: portraitResized,
        top: height - portraitMeta.height,
        left: 690
      }
    ])
    .png({ quality: 92, compressionLevel: 8 })
    .toBuffer();

  const publicDir = path.join(rootDir, 'public');
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });

  fs.writeFileSync(path.join(publicDir, 'og-banner.png'), finalPng);
  
  // Also create a high-quality JPEG version (for WhatsApp link preview)
  await sharp(finalPng)
    .jpeg({ quality: 90, mozjpeg: true })
    .toFile(path.join(publicDir, 'og-banner.jpg'));

  console.log('Successfully created public/og-banner.png (' + finalPng.length + ' bytes) and public/og-banner.jpg');
}

createBanner().catch(console.error);

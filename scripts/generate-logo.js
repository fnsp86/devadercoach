#!/usr/bin/env node
/**
 * Generate app logo: Father's hand holding child's hand
 * Amber (#F59E0B) on dark background (#111318)
 * Clean, minimal, emotional
 */
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const ASSETS = path.join(__dirname, '..', 'assets');

const createSVG = (size) => `
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 512 512">
  <defs>
    <radialGradient id="bgGrad" cx="50%" cy="45%" r="58%">
      <stop offset="0%" stop-color="#1a1c2e"/>
      <stop offset="100%" stop-color="#111318"/>
    </radialGradient>
    <linearGradient id="amber" x1="30%" y1="0%" x2="70%" y2="100%">
      <stop offset="0%" stop-color="#FCD34D"/>
      <stop offset="100%" stop-color="#E8930C"/>
    </linearGradient>
    <linearGradient id="amberLight" x1="30%" y1="0%" x2="70%" y2="100%">
      <stop offset="0%" stop-color="#FDE68A"/>
      <stop offset="100%" stop-color="#FBB716"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="40%">
      <stop offset="0%" stop-color="#F59E0B" stop-opacity="0.14"/>
      <stop offset="100%" stop-color="#F59E0B" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- Background -->
  <rect width="512" height="512" rx="112" fill="url(#bgGrad)"/>

  <!-- Warm glow behind hands -->
  <circle cx="256" cy="260" r="175" fill="url(#glow)"/>

  <!-- ═══ LARGE HAND (FATHER) — palm up, fingers slightly curled ═══ -->
  <g fill="url(#amber)">
    <path d="
      M 140 340
      C 130 330, 110 290, 108 265
      C 106 240, 112 220, 125 210
      C 138 200, 150 205, 155 215
      L 160 235
      C 162 242, 160 250, 155 255
      L 148 270
      C 145 275, 145 282, 150 288

      L 155 275
      C 160 260, 165 240, 172 225
      C 178 212, 186 200, 192 180
      C 196 168, 204 162, 212 168
      C 220 174, 218 186, 214 198
      L 200 235
      C 195 248, 192 258, 190 265

      L 200 248
      C 208 228, 218 205, 228 182
      C 234 168, 240 158, 250 160
      C 260 162, 262 174, 258 188
      L 238 238
      C 230 258, 225 270, 222 278

      L 232 260
      C 242 238, 252 215, 260 195
      C 266 182, 274 176, 282 180
      C 290 184, 290 196, 286 210
      L 264 265
      C 258 280, 254 290, 252 296

      L 260 282
      C 268 264, 278 245, 286 230
      C 292 220, 300 218, 306 224
      C 312 230, 310 242, 304 258
      L 282 308
      C 270 332, 262 348, 258 356

      C 250 375, 238 388, 218 396
      C 198 404, 172 398, 155 385
      C 142 374, 145 358, 140 340
      Z
    "/>
  </g>

  <!-- ═══ SMALL HAND (CHILD) — resting in father's palm ═══ -->
  <g fill="url(#amberLight)">
    <path d="
      M 195 310
      C 190 305, 182 290, 186 278
      C 188 270, 194 268, 198 274
      L 202 285

      L 206 275
      C 210 264, 215 254, 220 248
      C 224 242, 230 240, 234 246
      C 237 252, 234 260, 230 270
      L 222 290

      L 228 278
      C 234 266, 240 256, 246 250
      C 250 245, 256 246, 258 252
      C 260 258, 256 268, 250 280
      L 240 300

      L 248 290
      C 254 280, 260 272, 266 268
      C 270 264, 276 266, 276 274
      C 276 282, 272 290, 264 302
      L 250 322

      C 242 334, 230 340, 218 340
      C 206 340, 198 332, 195 322
      L 195 310
      Z
    "/>
  </g>
</svg>
`;

const createFaviconSVG = () => `
<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="112" fill="#111318"/>
  <!-- Simplified large hand -->
  <g fill="#F59E0B">
    <path d="
      M 140 340 C 130 330, 110 290, 108 265 C 106 240, 112 220, 125 210
      C 138 200, 150 205, 155 215 L 160 235 C 162 242, 160 250, 155 255
      L 148 270 C 145 275, 145 282, 150 288
      L 155 275 C 160 260, 165 240, 172 225 C 178 212, 186 200, 192 180
      C 196 168, 204 162, 212 168 C 220 174, 218 186, 214 198 L 200 235
      C 195 248, 192 258, 190 265
      L 200 248 C 208 228, 218 205, 228 182 C 234 168, 240 158, 250 160
      C 260 162, 262 174, 258 188 L 238 238 C 230 258, 225 270, 222 278
      L 232 260 C 242 238, 252 215, 260 195 C 266 182, 274 176, 282 180
      C 290 184, 290 196, 286 210 L 264 265 C 258 280, 254 290, 252 296
      L 260 282 C 268 264, 278 245, 286 230 C 292 220, 300 218, 306 224
      C 312 230, 310 242, 304 258 L 282 308 C 270 332, 262 348, 258 356
      C 250 375, 238 388, 218 396 C 198 404, 172 398, 155 385
      C 142 374, 145 358, 140 340 Z
    "/>
  </g>
  <!-- Simplified small hand -->
  <g fill="#FDE68A">
    <path d="
      M 195 310 C 190 305, 182 290, 186 278 C 188 270, 194 268, 198 274 L 202 285
      L 206 275 C 210 264, 215 254, 220 248 C 224 242, 230 240, 234 246
      C 237 252, 234 260, 230 270 L 222 290
      L 228 278 C 234 266, 240 256, 246 250 C 250 245, 256 246, 258 252
      C 260 258, 256 268, 250 280 L 240 300
      L 248 290 C 254 280, 260 272, 266 268 C 270 264, 276 266, 276 274
      C 276 282, 272 290, 264 302 L 250 322
      C 242 334, 230 340, 218 340 C 206 340, 198 332, 195 322 L 195 310 Z
    "/>
  </g>
</svg>
`;

async function generate() {
  console.log('Generating app logo assets...\n');

  if (!fs.existsSync(ASSETS)) {
    fs.mkdirSync(ASSETS, { recursive: true });
  }

  const iconSvg = Buffer.from(createSVG(1024));
  await sharp(iconSvg).resize(1024, 1024).png().toFile(path.join(ASSETS, 'icon.png'));
  console.log('✓ icon.png (1024x1024)');

  await sharp(iconSvg).resize(1024, 1024).png().toFile(path.join(ASSETS, 'adaptive-icon.png'));
  console.log('✓ adaptive-icon.png (1024x1024)');

  await sharp(iconSvg).resize(1024, 1024).png().toFile(path.join(ASSETS, 'splash-icon.png'));
  console.log('✓ splash-icon.png (1024x1024)');

  const faviconSvg = Buffer.from(createFaviconSVG());
  await sharp(faviconSvg).resize(48, 48).png().toFile(path.join(ASSETS, 'favicon.png'));
  console.log('✓ favicon.png (48x48)');

  console.log('\nDone!');
}

generate().catch((err) => {
  console.error('Error:', err);
  process.exit(1);
});

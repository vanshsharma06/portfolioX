import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';

async function optimizeImages() {
  const inputPath = 'src/assets/profile-photo.png';
  const outputPath = 'src/assets/profile-photo-optimized.png';

  try {
    const metadata = await sharp(inputPath).metadata();
    console.log(`Original image: ${metadata.width}x${metadata.height}`);

    // Resize to reasonable web size (max 800px width)
    await sharp(inputPath)
      .resize(800, 1000, { fit: 'inside', withoutEnlargement: true })
      .png({ quality: 85, compressionLevel: 9 })
      .toFile(outputPath);

    const stats = await fs.stat(outputPath);
    console.log(`Optimized image size: ${(stats.size / 1024).toFixed(2)} KB`);
    console.log('Image optimized successfully!');
  } catch (error) {
    console.error('Error optimizing image:', error);
  }
}

optimizeImages();
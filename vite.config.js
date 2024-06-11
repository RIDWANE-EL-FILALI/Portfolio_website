import { defineConfig } from 'vite';
import imageminPlugin from 'vite-plugin-imagemin';

export default defineConfig({
  plugins: [
    imageminPlugin({
      gifsicle: { optimizationLevel: 3 },
      optipng: { optimizationLevel: 5 },
      pngquant: { quality: [0.7, 0.9], speed: 4 },
      svgo: {},
      webp: { quality: 75 }
    })
  ]
});
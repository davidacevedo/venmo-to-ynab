import { defineConfig } from 'astro/config';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      nodePolyfills({

      })
    ]
  }
});

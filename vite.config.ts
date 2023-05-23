import { resolve } from "node:path";
import { defineConfig } from "vite";
import viteChecker from 'vite-plugin-checker';

export default defineConfig({
  plugins: [
    viteChecker({
      typescript: true,
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/scripts/main.ts"),
      },
      output: {
        assetFileNames: "assets/[name][extname]",
        chunkFileNames: "assets/[name].js",
        entryFileNames: "assets/[name].js",
      },
    },
    emptyOutDir: true,
    manifest: true,
  },
});

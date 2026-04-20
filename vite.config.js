import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  build: {
    outDir: "static/assets",
    emptyOutDir: false,
    rollupOptions: {
      input: {
        app: path.resolve(__dirname, "src/entries/app.js"),
        blog: path.resolve(__dirname, "src/entries/blog.js"),
        i18: path.resolve(__dirname, "src/entries/i18.js")
      },
      output: {
        entryFileNames: "[name].min.js",
        chunkFileNames: "chunks/[name]-[hash].js",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith(".css")) {
            return "[name].min[extname]";
          }
          return "assets/[name]-[hash][extname]";
        }
      }
    }
  }
});

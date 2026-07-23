import { defineConfig } from "vite";
import path from "path";
import injectHTML from "vite-plugin-html-inject";

export default defineConfig({
  plugins: [injectHTML()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    open: true,
  },
  build: {
    emptyOutDir: true,
  },
});

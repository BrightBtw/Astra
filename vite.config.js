import { defineConfig } from "vite";
import path from "path";
import injectHTML from "vite-plugin-html-inject";

export default defineConfig({
  base: "/Astra/",
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
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ["import"],
      },
    },
  },
});

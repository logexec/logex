import path from "path";
import react from '@vitejs/plugin-react'
import { defineConfig } from "vite";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      "^/api(/|$)": {
        changeOrigin: true,
        target: "http://127.0.0.1:8001",
      },
    },
  },
});

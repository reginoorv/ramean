import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
  },
  build: {
    outDir: "dist", // Direktori output untuk build
    assetsDir: "assets", // Direktori untuk assets
    sourcemap: false, // Disable sourcemap di production
  },
});

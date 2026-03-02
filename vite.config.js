import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: [
            "react",
            "react-dom",
            "react-router-dom",
            "bootstrap",
            "react-bootstrap",
          ],
          jquery: [
            "jquery",
            "jquery.ripples",
            "isotope-layout",
            "magnific-popup",
          ],
          utils: ["framer-motion", "gsap", "@iconify/react"],
        },
      },
    },
  },
});

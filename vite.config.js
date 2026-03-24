import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("gsap")) {
              return "animations-gsap";
            }
            if (id.includes("framer-motion")) {
              return "animations-motion";
            }
            if (id.includes("bootstrap")) {
              return "framework-ui";
            }
            if (
              id.includes("jquery") ||
              id.includes("ripples") ||
              id.includes("isotope") ||
              id.includes("magnific-popup")
            ) {
              return "jquery-vendor";
            }
            // Group the core react and others into a general vendor chunk
            return "vendor";
          }
        },
      },
    },
  },
});

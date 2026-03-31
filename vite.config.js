import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 3001,
  },

  preview: {
    host: true,
    port: 3001,
    allowedHosts: ["fe.blanca.co.in", ".blanca.co.in"],
  },

  build: {
    chunkSizeWarningLimit: 1000, // increase limit (optional)

    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {

            // 🔥 Core React (separate for caching)
            if (id.includes("react")) {
              return "react-core";
            }

            
            if (id.includes("gsap")) {
              return "animations-gsap";
            }

            
            if (id.includes("framer-motion")) {
              return "animations-motion";
            }

            
            if (id.includes("swiper")) {
              return "slider-swiper";
            }

           
            if (
              id.includes("react-hook-form") ||
              id.includes("react-select") ||
              id.includes("yup")
            ) {
              return "forms";
            }

           
            if (id.includes("react-dropzone") || id.includes("file-selector")) {
              return "file-upload";
            }

           
            if (id.includes("axios")) {
              return "network";
            }

           
            if (id.includes("country-state-city")) {
              return "country-data";
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

            
            if (id.includes("@iconify")) {
              return "icons";
            }

            
            return "vendor";
          }
        },
      },
    },
  },
});
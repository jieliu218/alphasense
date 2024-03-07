import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "./src/web-components/index.ts",
      name: "weather-wiget",
      fileName: (format) => `weather-wiget.${format}.js`,
    },
    target: "es2015",
  },
});

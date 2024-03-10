import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    visualizer({ open: true }),
    dts({
      exclude: [
        "**/node_modules/**",
        "**/*.test.*",
        "**/*.spec.*",
        "src/App.tsx",
        "src/main.tsx",
      ],
      insertTypesEntry: true,
      staticImport: true,
      outDir: ["dist/types"],
    }),
  ],
  publicDir: false,
  define: {
    "process.env": {
      NODE_ENV: "production",
    },
  },
  build: {
    lib: {
      entry: "./src/weather-widget/main.ts",
      name: "weather-widget",
      formats: ["es"],
      fileName: (format) => `index.${format}.js`,
    },
    // rollupOptions: {
    //   external: ["react", "react-dom"],
    //   output: {
    //     globals: {
    //       react: "React",
    //       "react-dom": "ReactDOM",
    //     },
    //   },
    // },
    target: "es2015",
  },
});

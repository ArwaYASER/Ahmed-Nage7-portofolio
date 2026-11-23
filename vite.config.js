import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// The site is served from https://arwayaser.github.io/Ahmed-Nage7-Portofolio/
export default defineConfig({
  base: "/Ahmed-Nage7-portofolio/",
  plugins: [react(), tailwindcss()],
});

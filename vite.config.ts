import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: !process.env.VITE_GITHUB_PAGES ? "/Portfolio/" : "/",
  plugins: [react()],
});

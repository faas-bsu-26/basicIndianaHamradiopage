import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

export default defineConfig(({ mode }) => ({
  plugins: [vue()],
  base: mode === "production" ? "/basicIndianaHamradiopage/" : "/",
  server: { port: 8080, strictPort: true },
}))
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

export default defineConfig({
  plugins: [vue()],
  preview: {
    host: true,
    port: 8080,
    allowedHosts: [
      "urchin-app-7gjmj.ondigitalocean.app"
    ]
  }
})
// https://vitejs.dev/config/
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import path from "path"

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src')
    },
  },
  plugins: [
    uni(),
  ],
  css: {
    preprocessorOptions: {
      // 引入公用的样式
      scss: {
        additionalData: `@import "@/style/base.scss";`
      }
    }
  }
})

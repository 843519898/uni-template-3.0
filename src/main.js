import { createSSRApp } from 'vue'
import App from './App.vue'

// import '@/style/base.scss'

export function createApp () {
  const app = createSSRApp(App)
  return {
    app
  }
}

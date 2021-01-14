import { createApp } from 'vue'
import './index.scss'
import './lib/taiji.scss'
import App from './App.vue'
import router from './routers'

const app = createApp(App)
app.use(router)
app.mount('#app')

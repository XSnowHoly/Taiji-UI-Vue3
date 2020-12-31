import { createApp } from 'vue'
import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue'
import HelloWorld2 from './components/HelloWorld2.vue'
import './index.css'
import { createWebHashHistory, createRouter } from 'vue-router'

const history = createWebHashHistory()
const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      component: HelloWorld,
    },
    {
      path: '/helloworld2',
      component: HelloWorld2,
    },
  ],
})

const app = createApp(App)
app.use(router)
app.mount('#app')

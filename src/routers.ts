import Home from './components/Home.vue'
import Doc from './components/Doc.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import TabDemo from './components/TabDemo.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import { createWebHashHistory, createRouter } from 'vue-router'

const history = createWebHashHistory()
const router = createRouter({
  history,
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home,
    },
    {
      path: '/doc',
      component: Doc,
      children: [
        {
          path: 'button',
          component: ButtonDemo,
        },
        {
          path: 'tab',
          component: TabDemo,
        },
        {
          path: 'switch',
          component: SwitchDemo,
        },
      ],
    },
  ],
})

export default router

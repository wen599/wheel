import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home'
import Doc from '@/views/Doc'
import ButtonPage from '@/components/ButtonPage'
import SwitchPage from '@/components/SwitchPage'
import dialogPage from '@/components/DialogPage'
import TabsPage from '@/components/TabsPage'
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/doc',
    name: 'doc',
    component: Doc,
    childen: [
      {
        path: 'buttonpage',
        name: 'buttonpage',
        component: ButtonPage
      },
      {
        path: 'switchpage',
        name: 'switchpage',
        component: SwitchPage
      },
      {
        path: 'dialogpage',
        name: 'dialogpage',
        component: dialogPage
      },
      {
        path: 'tabspage',
        name: 'tabspage',
        component: TabsPage
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

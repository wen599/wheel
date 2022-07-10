import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home'
import Doc from '@/views/Doc'
import ButtonPage from '@/components/ButtonPage'
import SwitchPage from '@/components/SwitchPage'
import dialogPage from '@/components/DialogPage'
import TabsPage from '@/components/TabsPage'
import NotFound from '@/components/NotFound'
import Intro from '@/components/Intro'
import Install from '@/components/Install'
import InputPage from '@/components/InputPage'
import gridPage from '@/components/gridPage'
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
    children: [
      {
        path: '',
        name: 'default',
        redirect: '/doc/switch',
        component: SwitchPage
      },
      {
        path: 'intro',
        name: 'intro',
        component: Intro
      },
      {
        path: 'install',
        name: 'install',
        component: Install
      },
      {
        path: 'switch',
        name: 'switch',
        component: SwitchPage
      },
      {
        path: 'button',
        name: 'button',
        component: ButtonPage
      },
      {
        path: 'dialog',
        name: 'dialog',
        component: dialogPage
      },
      {
        path: 'tabs',
        name: 'tabs',
        component: TabsPage
      },
      {
        path: 'input',
        name: 'input',
        component: InputPage
      },
      {
        path: 'grid',
        name: 'grid',
        component: gridPage
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

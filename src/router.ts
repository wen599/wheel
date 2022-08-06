import { createRouter, createWebHashHistory } from 'vue-router'
import type{ RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: () => import('@/views/Home.vue') },
  {
    path: '/document',
    component: () => import('@/views/Document.vue'),
    children: [
      { path: '', redirect: '/document/introduce' },
      { path: 'introduce', component: () => import('@/components/IntroducePage.vue') },
      { path: 'start', component: () => import('@/components/StartPage.vue') },
      { path: 'switch', component: () => import('@/components/SwitchPage.vue') },
      { path: 'button', component: () => import('@/components/ButtonPage.vue') },
      { path: 'tabs', component: () => import('@/components/TabsPage.vue') },
      { path: 'dialog', component: () => import('@/components/DialogPage.vue') },
      { path: 'toast', component: () => import('@/components/ToastPage.vue') },
      { path: 'popover', component: () => import('@/components/PopoverPage.vue') },
      { path: 'collapse', component: () => import('@/components/CollapsePage.vue') },
      { path: 'grid', component: () => import('@/components/GridPage.vue') },
      { path: 'input', component: () => import('@/components/InputPage.vue') },
      { path: 'layout', component: () => import('@/components/LayoutPage.vue') }
    ]
  }
]
export const router = createRouter({
  history: createWebHashHistory(),
  routes
})

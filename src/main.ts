import { createApp } from 'vue'
import '@/reset.scss'
import App from './App.vue'
import { router } from '@/router'
import '@/assets/iconfont/iconfont.css'
import 'github-markdown-css'
import 'prismjs'
import 'prismjs/themes/prism.css'

createApp(App).use(router).mount('#app')

import Diglog from '@/lib/Diglog'
import { createApp, h } from 'vue'
import Toast from '@/lib/Toast'

export const openDialog = (options) => {
  const { title, content, overlay, ok, cancel } = options
  const div = document.createElement('div')
  document.body.appendChild(div)
  const app = createApp({
    render () {
      return h(Diglog, {
        visible: true,
        'onUpdate:visible': (newVal) => {
          if (newVal === false) {
            app.unmount()
            div.remove()
          }
        },
        overlay,
        ok,
        cancel
      }, { title, content })
    }
  })

  app.mount(div)
}

export const showToast = (options) => {
  let container = document.querySelector('.wheel-toast-container')
  if (!container) {
    container = document.createElement('div')
    container.className = 'wheel-toast-container'
    document.body.appendChild(container)
  }
  const div = document.createElement('div')
  div.className = 'wheel-toast-xxx'
  container.appendChild(div)
  const app = createApp({
    render () {
      return h(Toast)
    }
  })
  app.mount(div)
  setTimeout(() => {
    app.unmount()
    div.remove()
    if (container.children.length === 0) {
      container.remove()
    }
  }, 3000)
}

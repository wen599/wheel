import Diglog from '@/lib/Diglog'
import { createApp, h } from 'vue'

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

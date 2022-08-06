<template>
  <h1>Toast组件</h1>
  <Demo title="常规用法">
    <template #demo>
      <ToastDemo2></ToastDemo2>
    </template>
    <template #code>
      <pre>
    &lt;template&gt;
    &lt;Button @click="showToast"&gt;click me&lt;/Button&gt;
    &lt;/template&gt;

    &lt;script setup lang='ts'&gt;
    import { toast } from '@/lib/Toast/Toast'
    import Button from '@/lib/Button.vue'
    const showToast = () =&gt; {
      toast('提示内容')
    }
    &lt;/script&gt;

    &lt;style scoped lang='scss'&gt;

    &lt;/style&gt;

      </pre>
    </template>
  </Demo>
  <Demo title="支持time/type/close"
        :text=text>
    <template #demo>
      <ToastDemo1></ToastDemo1>
    </template>
    <template #code>
      <pre>

      &lt;template&gt;
        &lt;Button @click="successToast"&gt;success&lt;/Button&gt;
        &lt;Button @click="warningToast"&gt;warning&lt;/Button&gt;
        &lt;Button @click="messageToast"&gt;message&lt;/Button&gt;
        &lt;Button @click="errorToast"&gt;error&lt;/Button&gt;

      &lt;/template&gt;

      &lt;script setup lang='ts'&gt;
        import Button from '@/lib/Button.vue'
        import { toast } from '@/lib/Toast/Toast'
        const successToast = () => {
          toast({
            content: 'success',
            time: 5000,
            close: () => {
              console.log('close')
            },
            type: 'success'
          })
        }
        const warningToast = () => {
          toast({
            content: 'warning',
            time: 1000,
            close: () => {
              console.log('close')
            },
            type: 'warning'
          })
        }
        const messageToast = () => {
          toast({
            content: 'message',
            time: 1000,
            close: () => {
              console.log('close')
            },
            type: 'message'
          })
        }
        const errorToast = () =>; {
          toast({
            content: 'error',
            time: 1000,
            close: () =>; {
              console.log('close')
            },
            type: 'error'
          })
        }
      &lt;/script&gt;

      &lt;style scoped lang='scss'&gt;

      &lt;/style&gt;

      </pre>
    </template>
  </Demo>
</template>

<script setup lang='ts'>
import ToastDemo1 from '@/components/Demo/Toast/ToastDemo1.vue'
import ToastDemo2 from '@/components/Demo/Toast/ToastDemo2.vue'
import Demo from '@/components/Commonality/Demo.vue'

const text = `
time:自动关闭时间 单位:ms,
close:自动关闭后的回调函数,
type: success|warning|message|age
`
</script>

<style scoped lang='scss'>

</style>

<template>
  <h1>Dialog组件</h1>
  <Demo title="常规用法">
    <template #demo>
      <DialogDemo></DialogDemo>
    </template>
    <template #code>
      <pre>

    &lt;template&gt;
      &lt;Button @click=show&gt; show &lt;/Button&gt;

    &lt;/template&gt;

    &lt;script setup lang='ts'&gt;
    import Button from '@/lib/Button.vue'
    import { showDialog } from '@/lib/Dialog'

    const confirm = () => {
      console.log('confirm')
    }
    const cancel = () => {
      console.log('cancel')
    }

    const show = () => {
      showDialog({
        title: '标题',
        content: '内容',
        onClickMaskClose: true,//是否开启点击遮罩关闭
        confirm,//点击确定后的回调
        cancel//点击取消后的回调
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
import DialogDemo from '@/components/Demo/Dialog/DialogDemo.vue'
import Demo from '@/components/Commonality/Demo.vue'
</script>

<style scoped lang='scss'>

</style>

<template>
  <Button @click=show> show </Button>

</template>

<script setup lang='ts'>
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
    onClickMaskClose: true,
    confirm,
    cancel
  })
}

</script>

<style scoped lang='scss'>

</style>

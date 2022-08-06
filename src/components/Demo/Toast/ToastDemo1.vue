<template>
  <Button @click="successToast">success</Button>
  <Button @click="warningToast">warning</Button>
  <Button @click="messageToast">message</Button>
  <Button @click="errorToast">error</Button>

</template>

<script setup lang='ts'>
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
const errorToast = () => {
  toast({
    content: 'error',
    time: 1000,
    close: () => {
      console.log('close')
    },
    type: 'error'
  })
}
</script>

<style scoped lang='scss'>
Button{
  margin: 5px;
}
</style>

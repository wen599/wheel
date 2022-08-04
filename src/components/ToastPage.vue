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
    content: 'test....',
    time: 1000,
    close: () => {
      console.log(1111)
    },
    type: 'success'
  })
}
const warningToast = () => {
  toast({
    content: 'test....',
    time: 1000,
    close: () => {
      console.log(1111)
    },
    type: 'warning'
  })
}
const messageToast = () => {
  toast({
    content: 'test....',
    time: 1000,
    close: () => {
      console.log(1111)
    },
    type: 'message'
  })
}
const errorToast = () => {
  toast({
    content: 'test....',
    time: 1000,
    close: () => {
      console.log(1111)
    },
    type: 'error'
  })
}
</script>

<style scoped lang='scss'>

</style>

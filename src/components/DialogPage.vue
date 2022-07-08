<template>
  <Button @click="showDialog" >show</Button>
</template>

<script>
import Button from '../lib/Button'
import { openDialog } from '@/lib/openDialog'

export default {
  name: 'DialogPage',
  components: {
    Button
  },
  setup () {
    const showDialog = () => {
      openDialog({
        title: '标题',
        content: '你好',
        overlay: false
      })
    }
    return { showDialog }
  }
}
</script>

<style >

</style>

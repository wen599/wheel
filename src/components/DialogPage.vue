<template>
  <Button @click="showDialog">show</Button>

</template>

<script>
import Button from '../lib/Button'
import { openDialog } from '@/lib/wheel-util'

export default {
  name: 'DialogPage',
  components: {
    Button
  },
  setup () {
    const showDialog = () => {
      openDialog({
        title: '标题111',
        content: '你好',
        overlay: false,
        ok () {},
        cancel () {}
      })
    }
    return { showDialog }
  }
}
</script>

<style >

</style>

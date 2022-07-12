<template>
  <Button @click="onclick"></Button>
</template>

<script>
import Button from '@/lib/Button'
import { showToast } from '@/lib/wheel-util'

export default {
  name: 'ToastPage',
  components: {
    Button
  },
  setup () {
    const onclick = () => {
      showToast({
        autoClose: true
      })
    }
    return { onclick }
  }

}
</script>

<style lang="scss">

</style>

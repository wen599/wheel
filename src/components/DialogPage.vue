<template>
  <Button @click="visible=!visible"> show </Button>
  <Dialog
      v-model:visible="visible"
      :onClickMaskClose="true"
      :confirm="confirm"
      :cancel="cancel"
  >
    <template v-slot:title>
      111
    </template>
    <template v-slot:content>
        222
    </template>
  </Dialog>
</template>

<script setup lang='ts'>
import Dialog from '@/lib/Dialog.vue'
import Button from '@/lib/Button.vue'
import { ref } from 'vue'

const visible = ref(false)
const confirm = () => {
  console.log(1)
}
const cancel = () => {
  console.log(2)
}
</script>

<style scoped lang='scss'>

</style>

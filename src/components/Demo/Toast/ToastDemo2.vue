<template>
<Button @click="showToast">click me</Button>
</template>

<script setup lang='ts'>
import { toast } from '@/lib/Toast/Toast'
import Button from '@/lib/Button.vue'
const showToast = () => {
  toast('提示内容')
}
</script>

<style scoped lang='scss'>

</style>

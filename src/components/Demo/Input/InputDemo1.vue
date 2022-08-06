<template>
  <WheelInput type="text" v-model:value="value"  placeholder="请输入"/>
</template>

<script setup lang='ts'>
import WheelInput from '@/lib/WheelInput.vue'
import { ref } from 'vue'
const value = ref('')
</script>

<style scoped lang='scss'>

</style>

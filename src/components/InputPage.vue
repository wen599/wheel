<template>
  <WheelInput class="ttt" type="number" v-model:value="value" @change="test"   :error="error" placeholder="1111"></WheelInput>
</template>

<script setup lang='ts'>
import WheelInput from '@/lib/WheelInput.vue'
import { ref } from 'vue'
const error = ref('')
const value = ref('')
const test = () => {
  if (value.value !== '' && value.value.length > 10) {
    error.value = '只能在十位数以下'
  } else {
    console.log(111)
    error.value = ''
  }
}
</script>

<style scoped lang='scss'>
:deep(.ttt){
  width: 200px;
}</style>

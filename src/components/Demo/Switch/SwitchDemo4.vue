<template>
  <Switch v-model="value" switch-on-color="red" switch-off-color="rgba(25,246,45,1)"></Switch>
  <Switch v-model="value" switch-circle-color="red"></Switch>

</template>

<script setup lang='ts'>
import Switch from '@/lib/Switch.vue'
import { ref } from 'vue'
const value = ref(true)
</script>

<style scoped lang='scss'>

</style>

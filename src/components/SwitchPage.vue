<template>

  <Switch v-model="value"></Switch>
  <Switch v-model="value" disabled></Switch>
  <Switch v-model="value" size="large"></Switch>
  <Switch v-model="value" size="small"></Switch>
  <Switch v-model="value" switch-on-color="red" switch-off-color="rgba(25,246,45,1)"></Switch>
  <Switch v-model="value" switch-circle-color="red"></Switch>
  <Switch v-model="value" active-text="Open" inactive-text="Close"></Switch>
  <Switch v-model="value" loading size="small"></Switch>
</template>

<script setup lang='ts'>
import Switch from '@/lib/Switch.vue'
import { ref } from 'vue'
const value = ref(true)

</script>

<style scoped lang='scss'>

</style>

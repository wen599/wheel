<template>
  <Switch v-model="value" active-text="Open" inactive-text="Close"></Switch>
</template>

<script setup lang='ts'>
import Switch from '@/lib/Switch.vue'
import { ref } from 'vue'
const value = ref(true)

</script>

<style scoped lang='scss'>

</style>

<template>
  <Button loading  theme="primary"></Button>
  <Button loading    theme="success"></Button>
  <Button loading    theme="info"></Button>
  <Button loading    theme="warning"></Button>
  <Button loading    theme="danger"></Button>
  <Button loading  ></Button>
</template>

<script setup lang='ts'>
import Button from '@/lib/Button.vue'
</script>

<style scoped lang='scss'>
Button{
  margin: 5px;
}
</style>

<template>
  <Button  round></Button>
  <Button theme="primary"  round>Primary</Button>
  <Button theme="success" round>Success</Button>
  <Button theme="info" round>Info</Button>
  <Button theme="warning" round>Warning</Button>
  <Button theme="danger" round>Danger</Button>
</template>

<script setup lang='ts'>
import Button from '@/lib/Button.vue'
</script>

<style scoped lang='scss'>
Button{
  margin: 5px;
}
</style>

<template>
  <Button  plain></Button>
  <Button theme="primary"  plain>Primary</Button>
  <Button theme="success" plain>Success</Button>
  <Button theme="info" plain>Info</Button>
  <Button theme="warning" plain>Warning</Button>
  <Button theme="danger" plain>Danger</Button></template>

<script setup lang='ts'>
import Button from '@/lib/Button.vue'

</script>

<style scoped lang='scss'>
Button{
  margin: 5px;
}
</style>

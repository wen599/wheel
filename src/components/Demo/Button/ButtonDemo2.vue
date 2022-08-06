<template>
  <Button theme="default">Default</Button>
  <Button theme="primary"   >Primary</Button>
  <Button theme="success"  >Success</Button>
  <Button theme="info" >Info</Button>
  <Button theme="warning" >Warning</Button>
  <Button theme="danger" >Danger</Button>
</template>

<script setup lang='ts'>
import Button from '@/lib/Button.vue'
</script>

<style scoped lang='scss'>
Button{
  margin: 5px;
}
</style>

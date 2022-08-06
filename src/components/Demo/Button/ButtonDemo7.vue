<template>
  <Button  link ></Button>
  <Button theme="primary"  link></Button>
  <Button theme="success" link ></Button>
  <Button theme="info" link></Button>
  <Button theme="warning" link></Button>
  <Button theme="danger" link></Button>
</template>

<script setup lang='ts'>
import Button from '@/lib/Button.vue'
</script>

<style scoped lang='scss'>
Button{
  margin: 5px;
}
</style>

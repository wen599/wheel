<template>
  <Popover class="popover" placement="top">
    <template #content>
      <div>test...</div>
    </template>
    <template #default>
      <Button>click me</Button>
    </template>
  </Popover>
  <Popover class="popover" placement="right">
    <template #content>
      <div>test...</div>
    </template>
    <template #default>
      <Button>click me</Button>
    </template>
  </Popover>
  <Popover class="popover" placement="bottom">
    <template #content>
      <div>test...</div>
    </template>
    <template #default>
      <Button>click me</Button>
    </template>
  </Popover>
  <Popover class="popover" placement="left">
    <template #content>
      <div>test...</div>
    </template>
    <template #default>
      <Button>click me</Button>
    </template>
  </Popover>
</template>

<script setup lang='ts'>
import Popover from '@/lib/Popover.vue'
import Button from '@/lib/Button.vue'
</script>

<style scoped lang='scss'>
.popover{
  margin: 5px;
}
</style>

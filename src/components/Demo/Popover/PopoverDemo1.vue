<template>
  <Popover class="popover" >
    <template #content>
      <div>test...</div>
    </template>
    <template #default>
      <Button>click me</Button>
    </template>
  </Popover>
</template>

<script setup lang='ts'>

import Button from '@/lib/Button.vue'
import Popover from '@/lib/Popover.vue'
</script>

<style scoped lang='scss'>

</style>

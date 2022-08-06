<template>
  <div>
    <Button circle icon="icon-sousuo" ></Button>
    <Button theme="primary"  circle icon="icon-bianji" ></Button>
    <Button theme="success" circle  icon="icon-duigou" ></Button>
    <Button theme="info" circle icon="icon-youjian_o" ></Button>
    <Button theme="warning" circle icon="icon-shoucang" ></Button>
    <Button theme="danger" circle icon="icon-shanchu" ></Button>
  </div>
</template>

<script setup lang='ts'>
import Button from '@/lib/Button.vue'

</script>

<style scoped lang='scss'>
Button{
  margin: 5px;
}
</style>

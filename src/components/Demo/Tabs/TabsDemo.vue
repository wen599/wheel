<template>
  <Tabs v-model:selected="selected">
    <Tab title="导航1">
      <p>内容1</p>
      <p>内容1</p>
      <p>内容1</p>
    </Tab>
    <Tab title="导航2">
      <p>内容2</p>
      <p>内容2</p>
      <p>内容2</p>
    </Tab>
    <Tab title="导航3">
      <p>内容3</p>
      <p>内容3</p>
      <p>内容3</p>
    </Tab>
  </Tabs>
</template>

<script setup lang='ts'>
import Tabs from '@/lib/Tabs/Tabs.vue'
import Tab from '@/lib/Tabs/Tab.vue'
import { ref } from 'vue'
const selected = ref('导航1')

</script>

<style scoped lang='scss'>

</style>

<template>
  <Tabs v-model:selected="selected">
    <Tab title="导航1" >
      <p class="ttt">111</p>
      <p>111</p>
      <p>111</p>
      <p>111</p>
    </Tab>
    <Tab title="导航2222">内容22222</Tab>
    <Tab title="导航3">内容3</Tab>
  </Tabs>
</template>

<script>
import Tab from '@/lib/Tab.vue'
import Tabs from '@/lib/Tabs.vue'
import { ref } from 'vue'
export default {
  name: 'TabsPage',
  components: {
    Tabs,
    Tab
  },
  setup () {
    const selected = ref('导航2222')
    return { selected }
  }
}
</script>

<style lang="scss">
  .ttt{
    background-color: #409eff;
  }
</style>

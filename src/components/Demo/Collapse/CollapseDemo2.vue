<template>
    <Collapse v-model="value" @change="test">
      <CollapseItem title="标题1" name="1">
        <div>内容1</div>
      </CollapseItem>
      <CollapseItem title="标题2" name="2">
        <div>内容2</div>
      </CollapseItem>
    </Collapse>
</template>

<script setup lang='ts'>
import Collapse from '@/lib/collapse/Collapse.vue'
import CollapseItem from '@/lib/collapse/CollapseItem.vue'
import { ref } from 'vue'

const value = ref(['1'])
const test = (names:string[]) => {
  console.log(names)
}
</script>

<style scoped lang='scss'>

</style>

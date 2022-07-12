<template>
    <Collapse >
      <Collapse-item title="标题1">内容1</Collapse-item>
      <Collapse-item title="标题2">内容2</Collapse-item>
      <Collapse-item title="标题3">内容3</Collapse-item>
    </Collapse>

</template>

<script>
import CollapseItem from '@/lib/Collapse/Collapse-item'
import Collapse from '@/lib/Collapse/Collapse'
export default {
  name: 'CollapsePage',
  components: {
    Collapse,
    'Collapse-item': CollapseItem
  }

}
</script>

<style scoped>

</style>

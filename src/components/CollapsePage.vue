<template>
  <h1>Collapse组件</h1>
  <Demo title="常规用法">
    <template #demo>
      <CollapseDemo1></CollapseDemo1>
    </template>
    <template #code>
      <pre>
      &lt;template&gt;
        &lt;Collapse &gt;
          &lt;CollapseItem title="标题1" name="1"&gt; //name:唯一标识
            &lt;div&gt;内容1&lt;/div&gt;
          &lt;/CollapseItem&gt;
          &lt;CollapseItem title="标题2" name="2"&gt;
            &lt;div&gt;内容2&lt;/div&gt;
          &lt;/CollapseItem&gt;
        &lt;/Collapse&gt;
      &lt;/template&gt;

      &lt;script setup lang='ts'&gt;
        import Collapse from '@/lib/collapse/Collapse.vue'
        import CollapseItem from '@/lib/collapse/CollapseItem.vue'

      &lt;/script&gt;

      &lt;style scoped lang='scss'&gt;

      &lt;/style&gt;
</pre>
    </template>
  </Demo>

  <Demo title="支持绑定value和change事件">
    <template #demo>
      <CollapseDemo2></CollapseDemo2>
    </template>
    <template #code>
      <pre>
    &lt;template&gt;
        &lt;Collapse v-model="value" @change="test"&gt;
          &lt;CollapseItem title="标题1" name="1"&gt;
            &lt;div&gt;内容1&lt;/div&gt;
          &lt;/CollapseItem&gt;
          &lt;CollapseItem title="标题2" name="2"&gt;
            &lt;div&gt;内容2&lt;/div&gt;
          &lt;/CollapseItem&gt;
        &lt;/Collapse&gt;
    &lt;/template&gt;

    &lt;script setup lang='ts'&gt;
    import Collapse from '@/lib/collapse/Collapse.vue'
    import CollapseItem from '@/lib/collapse/CollapseItem.vue'
    import { ref } from 'vue'

    const value = ref(['1'])
    const test = (names:string[]) => {
      console.log(names)
    }
    &lt;/script&gt;

    &lt;style scoped lang='scss'&gt;

    &lt;/style&gt;

</pre>
    </template>
  </Demo>

</template>

<script setup lang='ts'>
import Demo from '@/components/Commonality/Demo.vue'
import CollapseDemo1 from '@/components/Demo/Collapse/CollapseDemo1.vue'
import CollapseDemo2 from '@/components/Demo/Collapse/CollapseDemo2.vue'
</script>

<style scoped lang='scss'>
.container{
  width: 500px;
  height: 500px;
  border: 1px solid darkcyan;
  padding: 20px;

}
</style>

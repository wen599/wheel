<template>
  <h1>Popover组件</h1>
  <Demo title="常规用法">
    <template #demo>
      <PopoverDemo1></PopoverDemo1>
    </template>
    <template #code>
<pre>
      &lt;template&gt;
        &lt;Popover class="popover" &gt;
          &lt;template #content&gt;
            &lt;div&gt;test...&lt;/div&gt;
          &lt;/template&gt;
          &lt;template #default&gt;
            &lt;Button&gt;click me&lt;/Button&gt;
          &lt;/template&gt;
        &lt;/Popover&gt;
      &lt;/template&gt;

      &lt;script setup lang='ts'&gt;

        import Button from '@/lib/Button.vue'
        import Popover from '@/lib/Popover.vue'
      &lt;/script&gt;

      &lt;style scoped lang='scss'&gt;

      &lt;/style&gt;

</pre>
    </template>

  </Demo>

  <Demo title="支持placement">
    <template #demo>
      <PopoverDemo2></PopoverDemo2>
    </template>
    <template #code>
<pre>
    &lt;template&gt;
      &lt;Popover class="popover" placement="top"&gt;
        &lt;template #content&gt;
          &lt;div&gt;test...&lt;/div&gt;
        &lt;/template&gt;
        &lt;template #default&gt;
          &lt;Button&gt;click me&lt;/Button&gt;
        &lt;/template&gt;
      &lt;/Popover&gt;
      &lt;Popover class="popover" placement="right"&gt;
        &lt;template #content&gt;
          &lt;div&gt;test...&lt;/div&gt;
        &lt;/template&gt;
        &lt;template #default&gt;
          &lt;Button&gt;click me&lt;/Button&gt;
        &lt;/template&gt;
      &lt;/Popover&gt;
      &lt;Popover class="popover" placement="bottom"&gt;
        &lt;template #content&gt;
          &lt;div&gt;test...&lt;/div&gt;
        &lt;/template&gt;
        &lt;template #default&gt;
          &lt;Button&gt;click me&lt;/Button&gt;
        &lt;/template&gt;
      &lt;/Popover&gt;
      &lt;Popover class="popover" placement="left"&gt;
        &lt;template #content&gt;
          &lt;div&gt;test...&lt;/div&gt;
        &lt;/template&gt;
        &lt;template #default&gt;
          &lt;Button&gt;click me&lt;/Button&gt;
        &lt;/template&gt;
      &lt;/Popover&gt;
    &lt;/template&gt;

    &lt;script setup lang='ts'&gt;
    import Popover from '@/lib/Popover.vue'
    import Button from '@/lib/Button.vue'
    &lt;/script&gt;

    &lt;style scoped lang='scss'&gt;
    .popover{
      margin: 5px;
    }
    &lt;/style&gt;

</pre>
    </template>

  </Demo>

</template>

<script setup lang='ts'>
import Demo from '@/components/Commonality/Demo.vue'
import PopoverDemo1 from '@/components/Demo/Popover/PopoverDemo1.vue'
import PopoverDemo2 from '@/components/Demo/Popover/PopoverDemo2.vue'
</script>

<style scoped lang='scss'>
.popover{
  margin-right: 20px;
}
</style>

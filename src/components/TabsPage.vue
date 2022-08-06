<template>
  <h1>Tabs组件</h1>
  <Demo title="常规用法">
    <template #demo>
      <TabsDemo></TabsDemo>
    </template>
    <template #code>
      <pre>

&lt;template&gt;
  &lt;Tabs v-model:selected="selected"&gt;
    &lt;Tab title="导航1"&gt;
      &lt;p&gt;内容1&lt;/p&gt;
      &lt;p&gt;内容1&lt;/p&gt;
      &lt;p&gt;内容1&lt;/p&gt;
    &lt;/Tab&gt;
    &lt;Tab title="导航2"&gt;
      &lt;p&gt;内容2&lt;/p&gt;
      &lt;p&gt;内容2&lt;/p&gt;
      &lt;p&gt;内容2&lt;/p&gt;
    &lt;/Tab&gt;
    &lt;Tab title="导航3"&gt;
      &lt;p&gt;内容3&lt;/p&gt;
      &lt;p&gt;内容3&lt;/p&gt;
      &lt;p&gt;内容3&lt;/p&gt;
    &lt;/Tab&gt;
  &lt;/Tabs&gt;
&lt;/template&gt;

&lt;script setup lang='ts'&gt;
import Tabs from '@/lib/Tabs/Tabs.vue'
import Tab from '@/lib/Tabs/Tab.vue'
import { ref } from 'vue'
const selected = ref('导航1')

&lt;/script&gt;

&lt;style scoped lang='scss'&gt;

&lt;/style&gt;

      </pre>
    </template>
  </Demo>

</template>

<script setup lang='ts'>

import Demo from '@/components/Commonality/Demo.vue'
import TabsDemo from '@/components/Demo/Tabs/TabsDemo.vue'

</script>

<style scoped lang='scss'>

</style>

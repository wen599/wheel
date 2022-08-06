<template>
  <h1>Layout</h1>
  <Demo title="常见布局1">
    <template #demo>
      <LayoutDemo1></LayoutDemo1>
    </template>
    <template #code>
      <pre>
&lt;template&gt;
  &lt;Layout class="container"&gt;
    &lt;Header class="demo"&gt;&lt;/Header&gt;
    &lt;Content class="demo"&gt;&lt;/Content&gt;
    &lt;Footer class="demo"&gt;&lt;/Footer&gt;
  &lt;/Layout&gt;
&lt;/template&gt;

&lt;script setup lang='ts'&gt;
import Layout from '@/lib/Layout/Layout.vue'
import Header from '@/lib/Layout/Header.vue'
import Footer from '@/lib/Layout/Footer.vue'
import Content from '@/lib/Layout/Content.vue'
&lt;/script&gt;

&lt;style scoped lang='scss'&gt;
.container{
  height: 300px;
}
.demo{
  border: 1px solid darkgreen;
}
&lt;/style&gt;

      </pre>
    </template>
  </Demo>

  <Demo title="常见布局2">
    <template #demo>
      <LayoutDemo2></LayoutDemo2>
    </template>
    <template #code>
      <pre>
&lt;template&gt;
  &lt;Layout class="container"&gt;
    &lt;Header class="demo"&gt;&lt;/Header&gt;
    &lt;Layout&gt;
      &lt;Aside class="demo"&gt;&lt;/Aside&gt;
      &lt;Content class="demo"&gt;&lt;/Content&gt;
    &lt;/Layout&gt;
    &lt;Footer class="demo"&gt;&lt;/Footer&gt;
  &lt;/Layout&gt;
&lt;/template&gt;

&lt;script setup lang='ts'&gt;
import Layout from '@/lib/Layout/Layout.vue'
import Header from '@/lib/Layout/Header.vue'
import Footer from '@/lib/Layout/Footer.vue'
import Content from '@/lib/Layout/Content.vue'
import Aside from '@/lib/Layout/Aside.vue'
&lt;/script&gt;

&lt;style scoped lang='scss'&gt;
.container{
  height: 300px;
}
.demo{
  border: 1px solid darkgreen;
}
&lt;/style&gt;

      </pre>
    </template>
  </Demo>

  <Demo title="常见布局3">
    <template #demo>
      <LayoutDemo3></LayoutDemo3>
    </template>
    <template #code>
      <pre>
&lt;template&gt;
  &lt;Layout class="container"&gt;
    &lt;Header class="demo"&gt;&lt;/Header&gt;
    &lt;Layout&gt;
      &lt;Content class="demo"&gt;&lt;/Content&gt;
      &lt;Aside class="demo"&gt;&lt;/Aside&gt;
    &lt;/Layout&gt;
    &lt;Footer class="demo"&gt;&lt;/Footer&gt;
  &lt;/Layout&gt;
&lt;/template&gt;

&lt;script setup lang='ts'&gt;
import Layout from '@/lib/Layout/Layout.vue'
import Header from '@/lib/Layout/Header.vue'
import Footer from '@/lib/Layout/Footer.vue'
import Content from '@/lib/Layout/Content.vue'
import Aside from '@/lib/Layout/Aside.vue'
&lt;/script&gt;

&lt;style scoped lang='scss'&gt;
.container{
  height: 300px;
}
.demo{
  border: 1px solid darkgreen;
}
&lt;/style&gt;

      </pre>
    </template>
  </Demo>

  <Demo title="常见布局4">
    <template #demo>
      <LayoutDemo4></LayoutDemo4>
    </template>
    <template #code>
      <pre>
&lt;template&gt;
  &lt;Layout class="container"&gt;
    &lt;Aside class="demo" &gt;

    &lt;/Aside&gt;
    &lt;Layout  &gt;
      &lt;Header class="demo"&gt;&lt;/Header&gt;
      &lt;Content class="demo"&gt;&lt;/Content&gt;
      &lt;Footer class="demo"&gt;&lt;/Footer&gt;
    &lt;/Layout&gt;
  &lt;/Layout&gt;

&lt;/template&gt;

&lt;script setup lang='ts'&gt;
import Layout from '@/lib/Layout/Layout.vue'
import Header from '@/lib/Layout/Header.vue'
import Footer from '@/lib/Layout/Footer.vue'
import Content from '@/lib/Layout/Content.vue'
import Aside from '@/lib/Layout/Aside.vue'
&lt;/script&gt;

&lt;style scoped lang='scss'&gt;
.container{
  height: 300px;
}
.demo{
  border: 1px solid darkgreen;
}
&lt;/style&gt;

      </pre>
    </template>
  </Demo>

</template>

<script setup lang='ts'>

import Demo from '@/components/Commonality/Demo.vue'
import LayoutDemo1 from '@/components/Demo/Layout/LayoutDemo1.vue'
import LayoutDemo2 from '@/components/Demo/Layout/LayoutDemo2.vue'
import LayoutDemo3 from '@/components/Demo/Layout/LayoutDemo3.vue'
import LayoutDemo4 from '@/components/Demo/Layout/LayoutDemo4.vue'

</script>

<style scoped lang='scss'>

</style>

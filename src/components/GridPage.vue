<template>
  <h1>Grid组件</h1>
<Demo title="基础用法" text="根据col的个数均分row">
  <template #demo>
    <GridDemo1></GridDemo1>
  </template>
  <template #code>
    <pre>
    &lt;template&gt;
      &lt;Row&gt;
        &lt;Col class="col"&gt;&lt;/Col&gt;
      &lt;/Row&gt;
      &lt;Row&gt;
        &lt;Col class="col"&gt;&lt;/Col&gt;
        &lt;Col class="col"&gt;&lt;/Col&gt;
      &lt;/Row&gt;
      &lt;Row&gt;
        &lt;Col class="col"&gt;&lt;/Col&gt;
        &lt;Col class="col"&gt;&lt;/Col&gt;
        &lt;Col class="col"&gt;&lt;/Col&gt;
      &lt;/Row&gt;
    &lt;/template&gt;

    &lt;script setup lang='ts'&gt;
    import Row from '@/lib/Grid/Row.vue'
    import Col from '@/lib/Grid/Col.vue'

    &lt;/script&gt;

    &lt;style scoped lang='scss'&gt;
    .row{
      margin-top: 20px;
    }
    .col{
      height: 50px;
      outline: 1px solid darkcyan;
    }
    &lt;/style&gt;

    </pre>
  </template>
</Demo>

  <Demo title="自由布局" text="根据span 自由设置col的宽度 ">
    <template #demo>
      <GridDemo2></GridDemo2>
    </template>
    <template #code>
      <pre>

    &lt;template&gt;
      &lt;Row class="row"&gt;
        &lt;Col class="col" span="2"&gt;&lt;/Col&gt;
        &lt;Col class="col" span="10"&gt;&lt;/Col&gt;
        &lt;Col class="col" span="10"&gt;&lt;/Col&gt;
        &lt;Col class="col" span="2"&gt;&lt;/Col&gt;
      &lt;/Row&gt;
      &lt;Row&gt;
        &lt;Col class="col" span="8"&gt;&lt;/Col&gt;
        &lt;Col class="col" span="4"&gt;&lt;/Col&gt;
        &lt;Col class="col" span="4"&gt;&lt;/Col&gt;
        &lt;Col class="col" span="8"&gt;&lt;/Col&gt;
      &lt;/Row&gt;
    &lt;/template&gt;

    &lt;script setup lang='ts'&gt;
    import Row from '@/lib/Grid/Row.vue'
    import Col from '@/lib/Grid/Col.vue'

    &lt;/script&gt;

    &lt;style scoped lang='scss'&gt;

    .col{
      height: 50px;
      outline: 1px solid darkcyan;
    }
    &lt;/style&gt;

      </pre>
    </template>
  </Demo>

  <Demo title="支持gutter" text="根据gutter 设置间隔 ">
    <template #demo>
      <GridDemo3></GridDemo3>
    </template>
    <template #code>
      <pre>
&lt;template&gt;
  &lt;Row class="row" gutter="20"&gt;
    &lt;Col class="col" &gt;&lt;p class="item"&gt;&lt;/p&gt;&lt;/Col&gt;
    &lt;Col class="col" &gt;&lt;p class="item"&gt;&lt;/p&gt;&lt;/Col&gt;
    &lt;Col class="col" &gt;&lt;p class="item"&gt;&lt;/p&gt;&lt;/Col&gt;
    &lt;Col class="col" &gt;&lt;p class="item"&gt;&lt;/p&gt;&lt;/Col&gt;

  &lt;/Row&gt;

&lt;/template&gt;

&lt;script setup lang='ts'&gt;
import Row from '@/lib/Grid/Row.vue'
import Col from '@/lib/Grid/Col.vue'

&lt;/script&gt;

&lt;style scoped lang='scss'&gt;

.col{
  height: 50px;
  //outline: 1px solid darkcyan;
}
.item{
  height: 50px;
  background-color: #4a5462;
}
&lt;/style&gt;

      </pre>
    </template>
  </Demo>

  <Demo title="支持offset" text="根据offset 设置偏移量 ">
    <template #demo>
      <GridDemo4></GridDemo4>
    </template>
    <template #code>
      <pre>

&lt;template&gt;
  &lt;Row class="row" &gt;
    &lt;Col class="col" span="4" offset="1"&gt;&lt;p class="item"&gt;&lt;/p&gt;&lt;/Col&gt;
    &lt;Col class="col" span="8" offset="2"&gt;&lt;p class="item"&gt;&lt;/p&gt;&lt;/Col&gt;
    &lt;Col class="col" span="4" offset="3"&gt;&lt;p class="item"&gt;&lt;/p&gt;&lt;/Col&gt;
    &lt;Col class="col" span="1" offset="1"&gt;&lt;p class="item"&gt;&lt;/p&gt;&lt;/Col&gt;
  &lt;/Row&gt;

&lt;/template&gt;

&lt;script setup lang='ts'&gt;
import Row from '@/lib/Grid/Row.vue'
import Col from '@/lib/Grid/Col.vue'

&lt;/script&gt;

&lt;style scoped lang='scss'&gt;

.col{
  height: 50px;
  outline: 1px solid darkcyan;
}

&lt;/style&gt;

      </pre>
    </template>
  </Demo>

  <Demo title="响应式" text="预设了六个响应尺寸：xs、xm、md、lg、xl 和默认">
    <template #demo>
      <GridDemo5></GridDemo5>
    </template>
    <template #code>
      <pre>

&lt;template&gt;
  &lt;Row class="row" &gt;
    &lt;Col class="col" span="4" offset="1"&gt;&lt;p class="item"&gt;&lt;/p&gt;&lt;/Col&gt;
    &lt;Col class="col" span="8" offset="2"&gt;&lt;p class="item"&gt;&lt;/p&gt;&lt;/Col&gt;
    &lt;Col class="col" span="4" offset="3"&gt;&lt;p class="item"&gt;&lt;/p&gt;&lt;/Col&gt;
    &lt;Col class="col" span="1" offset="1"&gt;&lt;p class="item"&gt;&lt;/p&gt;&lt;/Col&gt;
  &lt;/Row&gt;

&lt;/template&gt;

&lt;script setup lang='ts'&gt;
import Row from '@/lib/Grid/Row.vue'
import Col from '@/lib/Grid/Col.vue'

&lt;/script&gt;

&lt;style scoped lang='scss'&gt;

.col{
  height: 50px;
  outline: 1px solid darkcyan;
}

&lt;/style&gt;

      </pre>
    </template>
  </Demo>

</template>

<script setup lang='ts'>
import Demo from '@/components/Commonality/Demo.vue'
import GridDemo1 from '@/components/Demo/Grid/GridDemo1.vue'
import GridDemo2 from '@/components/Demo/Grid/GridDemo2.vue'
import GridDemo3 from '@/components/Demo/Grid/GridDemo3.vue'
import GridDemo4 from '@/components/Demo/Grid/GridDemo4.vue'
import GridDemo5 from '@/components/Demo/Grid/GridDemo5.vue'
</script>

<style scoped lang='scss'>

</style>

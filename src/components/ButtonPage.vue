<template>
  <h1>Button组件</h1>
  <Demo  title="常规用法">
    <template #demo>
       <ButtonDemo1></ButtonDemo1>
    </template>
    <template #code>
      <pre>
    &lt;template&gt;
    &lt;Button&gt;click me&lt;/Button&gt;

    &lt;/template&gt;

    &lt;script setup lang='ts'&gt;
    import Button from '@/lib/Button.vue'

    &lt;/script&gt;

    &lt;style scoped lang='scss'&gt;

    &lt;/style&gt;

      </pre>
    </template>
  </Demo>

  <Demo  title="支持theme">
    <template #demo>
      <ButtonDemo2></ButtonDemo2>
    </template>
    <template #code>
      <pre>

    &lt;template&gt;
      &lt;Button theme="default"&gt;Default&lt;/Button&gt;
      &lt;Button theme="primary"   &gt;Primary&lt;/Button&gt;
      &lt;Button theme="success"  &gt;Success&lt;/Button&gt;
      &lt;Button theme="info" &gt;Info&lt;/Button&gt;
      &lt;Button theme="warning" &gt;Warning&lt;/Button&gt;
      &lt;Button theme="danger" &gt;Danger&lt;/Button&gt;
    &lt;/template&gt;

    &lt;script setup lang='ts'&gt;
    import Button from '@/lib/Button.vue'
    &lt;/script&gt;

    &lt;style scoped lang='scss'&gt;
    Button{
      margin: 5px;
    }
    &lt;/style&gt;

      </pre>
    </template>
  </Demo>

  <Demo  title="支持size">
    <template #demo>
      <ButtonDemo3></ButtonDemo3>
    </template>
    <template #code>
      <pre>

    &lt;template&gt;
      &lt;Button theme="default"&gt;Default&lt;/Button&gt;
      &lt;Button theme="primary"   &gt;Primary&lt;/Button&gt;
      &lt;Button theme="success"  &gt;Success&lt;/Button&gt;
      &lt;Button theme="info" &gt;Info&lt;/Button&gt;
      &lt;Button theme="warning" &gt;Warning&lt;/Button&gt;
      &lt;Button theme="danger" &gt;Danger&lt;/Button&gt;
    &lt;/template&gt;

    &lt;script setup lang='ts'&gt;
    import Button from '@/lib/Button.vue'
    &lt;/script&gt;

    &lt;style scoped lang='scss'&gt;
    Button{
      margin: 5px;
    }
    &lt;/style&gt;

      </pre>
    </template>
  </Demo>

  <Demo  title="支持plain">
    <template #demo>
      <ButtonDemo4></ButtonDemo4>
    </template>
    <template #code>
      <pre>
&lt;template&gt;
  &lt;Button  plain&gt;&lt;/Button&gt;
  &lt;Button theme="primary"  plain&gt;Primary&lt;/Button&gt;
  &lt;Button theme="success" plain&gt;Success&lt;/Button&gt;
  &lt;Button theme="info" plain&gt;Info&lt;/Button&gt;
  &lt;Button theme="warning" plain&gt;Warning&lt;/Button&gt;
  &lt;Button theme="danger" plain&gt;Danger&lt;/Button&gt;&lt;/template&gt;

&lt;script setup lang='ts'&gt;
import Button from '@/lib/Button.vue'

&lt;/script&gt;

&lt;style scoped lang='scss'&gt;
Button{
  margin: 5px;
}
&lt;/style&gt;

      </pre>
    </template>
  </Demo>

  <Demo  title="支持round">
    <template #demo>
      <ButtonDemo5></ButtonDemo5>
    </template>
    <template #code>
      <pre>
&lt;template&gt;
  &lt;Button  plain&gt;&lt;/Button&gt;
  &lt;Button theme="primary"  plain&gt;Primary&lt;/Button&gt;
  &lt;Button theme="success" plain&gt;Success&lt;/Button&gt;
  &lt;Button theme="info" plain&gt;Info&lt;/Button&gt;
  &lt;Button theme="warning" plain&gt;Warning&lt;/Button&gt;
  &lt;Button theme="danger" plain&gt;Danger&lt;/Button&gt;&lt;/template&gt;

&lt;script setup lang='ts'&gt;
import Button from '@/lib/Button.vue'

&lt;/script&gt;

&lt;style scoped lang='scss'&gt;
Button{
  margin: 5px;
}
&lt;/style&gt;

      </pre>
    </template>
  </Demo>

  <Demo  title="支持circle">
    <template #demo>
      <ButtonDemo6></ButtonDemo6>
    </template>
    <template #code>
      <pre>

      &lt;template&gt;
      &lt;div&gt;
        &lt;Button circle icon="icon-sousuo" &gt;&lt;/Button&gt;
        &lt;Button theme="primary"  circle icon="icon-bianji" &gt;&lt;/Button&gt;
        &lt;Button theme="success" circle  icon="icon-duigou" &gt;&lt;/Button&gt;
        &lt;Button theme="info" circle icon="icon-youjian_o" &gt;&lt;/Button&gt;
        &lt;Button theme="warning" circle icon="icon-shoucang" &gt;&lt;/Button&gt;
        &lt;Button theme="danger" circle icon="icon-shanchu" &gt;&lt;/Button&gt;
      &lt;/div&gt;
    &lt;/template&gt;

    &lt;script setup lang='ts'&gt;
    import Button from '@/lib/Button.vue'

    &lt;/script&gt;

    &lt;style scoped lang='scss'&gt;
    Button{
      margin: 5px;
    }
    &lt;/style&gt;

      </pre>
    </template>
  </Demo>

  <Demo  title="支持link">
    <template #demo>
      <ButtonDemo7></ButtonDemo7>
    </template>
    <template #code>
      <pre>

      &lt;template&gt;
        &lt;Button  link &gt;&lt;/Button&gt;
        &lt;Button theme="primary"  link&gt;&lt;/Button&gt;
        &lt;Button theme="success" link &gt;&lt;/Button&gt;
        &lt;Button theme="info" link&gt;&lt;/Button&gt;
        &lt;Button theme="warning" link&gt;&lt;/Button&gt;
        &lt;Button theme="danger" link&gt;&lt;/Button&gt;
      &lt;/template&gt;

      &lt;script setup lang='ts'&gt;
      import Button from '@/lib/Button.vue'
      &lt;/script&gt;

      &lt;style scoped lang='scss'&gt;
      Button{
        margin: 5px;
      }
      &lt;/style&gt;

      </pre>
    </template>
  </Demo>

  <Demo  title="支持disabled">
    <template #demo>
      <ButtonDemo8></ButtonDemo8>
    </template>
    <template #code>
      <pre>

    &lt;template&gt;
      &lt;Button disabled  theme="primary"&gt;&lt;/Button&gt;
      &lt;Button disabled  theme="success"&gt;&lt;/Button&gt;
      &lt;Button disabled  theme="info"&gt;&lt;/Button&gt;
      &lt;Button disabled  theme="warning"&gt;&lt;/Button&gt;
      &lt;Button disabled  theme="danger"&gt;&lt;/Button&gt;
      &lt;Button disabled  &gt;&lt;/Button&gt;
    &lt;/template&gt;

    &lt;script setup lang='ts'&gt;
    import Button from '@/lib/Button.vue'
    &lt;/script&gt;

    &lt;style scoped lang='scss'&gt;

    Button{
      margin: 5px;
    }
    &lt;/style&gt;

      </pre>
    </template>
  </Demo>

  <Demo  title="支持loading">
    <template #demo>
      <ButtonDemo9></ButtonDemo9>
    </template>
    <template #code>
      <pre >

    &lt;template&gt;
      &lt;Button loading  theme="primary"&gt;&lt;/Button&gt;
      &lt;Button loading    theme="success"&gt;&lt;/Button&gt;
      &lt;Button loading    theme="info"&gt;&lt;/Button&gt;
      &lt;Button loading    theme="warning"&gt;&lt;/Button&gt;
      &lt;Button loading    theme="danger"&gt;&lt;/Button&gt;
      &lt;Button loading  &gt;&lt;/Button&gt;
    &lt;/template&gt;

    &lt;script setup lang='ts'&gt;
    import Button from '@/lib/Button.vue'
    &lt;/script&gt;

    &lt;style scoped lang='scss'&gt;

    &lt;/style&gt;

      </pre>
    </template>
  </Demo>

</template>

<script setup lang='ts'>
import Demo from '@/components/Commonality/Demo.vue'
import ButtonDemo1 from '@/components/Demo/Button/ButtonDemo1.vue'
import ButtonDemo2 from '@/components/Demo/Button/ButtonDemo2.vue'
import ButtonDemo3 from '@/components/Demo/Button/ButtonDemo3.vue'
import ButtonDemo4 from '@/components/Demo/Button/ButtonDemo4.vue'
import ButtonDemo5 from '@/components/Demo/Button/ButtonDemo5.vue'
import ButtonDemo6 from '@/components/Demo/Button/ButtonDemo6.vue'
import ButtonDemo7 from '@/components/Demo/Button/ButtonDemo7.vue'
import ButtonDemo8 from '@/components/Demo/Button/ButtonDemo8.vue'
import ButtonDemo9 from '@/components/Demo/Button/ButtonDemo9.vue'

</script>

<style scoped lang='scss'>

</style>

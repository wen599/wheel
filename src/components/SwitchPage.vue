<template>
  <h1>Switch 组件</h1>
  <Demo title="常规用法" >
    <template #demo>
        <SwitchDemo1></SwitchDemo1>
    </template>
    <template #code>
      <pre>
      &lt;template&gt;
        &lt;Switch v-model="value"&gt;&lt;/Switch&gt;
      &lt;/template&gt;

      &lt;script setup lang='ts'&gt;
        import Switch from '@/lib/Switch.vue'
        import { ref } from 'vue'

        const value = ref(true)

      &lt;/script&gt;

      &lt;style scoped lang='scss'&gt;

      &lt;/style&gt;
    </pre>
    </template>
  </Demo>

  <Demo title="支持disabled">
    <template #demo>
      <SwitchDemo2></SwitchDemo2>
    </template>
    <template #code>
  <pre>
      &lt;template&gt;
        &lt;Switch v-model="value" disabled&gt;&lt;/Switch&gt;
      &lt;/template&gt;

      &lt;script setup lang='ts'&gt;
        import Switch from '@/lib/Switch.vue'
        import { ref } from 'vue'
        const value = ref(true)
      &lt;/script&gt;

      &lt;style scoped lang='scss'&gt;

      &lt;/style&gt;
</pre>
    </template>
  </Demo>

  <Demo title="支持size">
    <template #demo>
      <SwitchDemo3></SwitchDemo3>
    </template>
    <template #code>
  <pre>
    &lt;template&gt;
      &lt;Switch v-model="value" size="small"&gt;&lt;/Switch&gt;
      &lt;Switch v-model="value" &gt;&lt;/Switch&gt;
      &lt;Switch v-model="value" size="large"&gt;&lt;/Switch&gt;
    &lt;/template&gt;

    &lt;script setup lang='ts'&gt;
    import Switch from '@/lib/Switch.vue'
    import { ref } from 'vue'
    const value = ref(true)
    &lt;/script&gt;

    &lt;style scoped lang='scss'&gt;

    &lt;/style&gt;

  </pre>
    </template>
  </Demo>

  <Demo title="支持自定义color">
    <template #demo>
     <SwitchDemo4></SwitchDemo4>
    </template>
    <template #code>
  <pre>

    &lt;template&gt;
    &lt;Switch v-model="value" switch-on-color="red" switch-off-color="rgba(25,246,45,1)"&gt;&lt;/Switch&gt;
    &lt;Switch v-model="value" switch-circle-color="red"&gt;&lt;/Switch&gt;

    &lt;/template&gt;

    &lt;script setup lang='ts'&gt;
    import Switch from '@/lib/Switch.vue'
    import { ref } from 'vue'
    const value = ref(true)
    &lt;/script&gt;

    &lt;style scoped lang='scss'&gt;

    &lt;/style&gt;

  </pre>
    </template>
  </Demo>

  <Demo title="支持自定义激活文字">
    <template #demo>
      <SwitchDemo5></SwitchDemo5>
    </template>
    <template #code>
  <pre>

    &lt;template&gt;
      &lt;Switch v-model="value" active-text="Open" inactive-text="Close"&gt;&lt;/Switch&gt;
    &lt;/template&gt;

    &lt;script setup lang='ts'&gt;
    import Switch from '@/lib/Switch.vue'
    import { ref } from 'vue'
    const value = ref(true)

    &lt;/script&gt;

    &lt;style scoped lang='scss'&gt;

    &lt;/style&gt;

  </pre>
    </template>
  </Demo>

  <Demo title="支持loading">
    <template #demo>
          <SwitchDemo6></SwitchDemo6>
    </template>
    <template #code>
      <pre>
    &lt;template&gt;
      &lt;Switch v-model="value" loading &gt;&lt;/Switch&gt;
    &lt;/template&gt;

    &lt;script setup lang='ts'&gt;
    import { ref } from 'vue'
    const value = ref(true)

    &lt;/script&gt;

    &lt;style scoped lang='scss'&gt;

    &lt;/style&gt;

      </pre>
    </template>
  </Demo>
</template>

<script setup lang='ts'>

import Demo from '@/components/Commonality/Demo.vue'
import SwitchDemo1 from '@/components/Demo/Switch/SwitchDemo1.vue'
import SwitchDemo2 from '@/components/Demo/Switch/SwitchDemo2.vue'
import SwitchDemo3 from '@/components/Demo/Switch/SwitchDemo3.vue'
import SwitchDemo4 from '@/components/Demo/Switch/SwitchDemo4.vue'
import SwitchDemo5 from '@/components/Demo/Switch/SwitchDemo5.vue'
import SwitchDemo6 from '@/components/Demo/Switch/SwitchDemo6.vue'

</script>

<style scoped lang='scss'>

</style>

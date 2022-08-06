<template>
  <h1>input组件</h1>
  <Demo title="常规用法">
    <template #demo>
      <InputDemo1></InputDemo1>
    </template>
    <template #code>
      <pre>

    &lt;template&gt;
      &lt;WheelInput type="text" v-model:value="value"  placeholder="请输入"/&gt;
    &lt;/template&gt;

    &lt;script setup lang='ts'&gt;
    import WheelInput from '@/lib/WheelInput.vue'
    import { ref } from 'vue'
    const value = ref('')
    &lt;/script&gt;

    &lt;style scoped lang='scss'&gt;

    &lt;/style&gt;

      </pre>
    </template>
  </Demo>
  <Demo title="支持error">
    <template #demo>
      <InputDemo2></InputDemo2>
    </template>
    <template #code>
      <pre>

    &lt;template&gt;
      &lt;WheelInput type="text" v-model:value="value"  placeholder="请输入" error="用户名错误"/&gt;
    &lt;/template&gt;

    &lt;script setup lang='ts'&gt;
    import WheelInput from '@/lib/WheelInput.vue'
    import { ref } from 'vue'
    const value = ref('')
    &lt;/script&gt;

    &lt;style scoped lang='scss'&gt;

    &lt;/style&gt;

      </pre>
    </template>
  </Demo>
</template>

<script setup lang='ts'>
import InputDemo1 from '@/components/Demo/Input/InputDemo1.vue'
import InputDemo2 from '@/components/Demo/Input/InputDemo2.vue'
import Demo from '@/components/Commonality/Demo.vue'
</script>

<style scoped lang='scss'>

</style>

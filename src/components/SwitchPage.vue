<template>
  <main class="switch-page-content">
    <Switch v-model:checked="checked" @change="ttt"></Switch>
  </main>

</template>

<script>
import Switch from '@/lib/Switch'
import { ref } from 'vue'
export default {
  name: 'SwitchPage',
  components: { Switch },
  setup () {
    // 定义switch的状态
    const checked = ref(true)
    const ttt = (newVal) => {
      console.log(newVal)
    }
    return { checked, ttt }
  }
}
</script>

<style scoped>
    .switch-page-content{
      background-color: #ff7fa5;
      min-height:100% ;
    }
</style>

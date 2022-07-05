<template>
  <router-view/>
</template>
<script setup>
import { provide, ref } from 'vue'
import router from '@/router'

// 控制是否显示aside,并且监听窗口改变
const asideVisible = ref(window.innerWidth > 500)
window.onresize = function () {
  asideVisible.value = window.innerWidth > 500
}
// 切换路由判断是否显示aside和视口是否是手机
router.afterEach(() => {
  if (window.innerWidth < 500) asideVisible.value = false
})
provide('asideVisible', asideVisible)
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

</style>

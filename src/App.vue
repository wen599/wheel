<template>
  <router-view/>
</template>
<script setup>
import { provide, ref } from 'vue'
import router from '@/router'

const asideVisible = ref(window.innerWidth > 500)
window.onresize = function () {
  asideVisible.value = window.innerWidth > 500
}

router.afterEach(() => {
  if (asideVisible.value && window.innerWidth < 500) asideVisible.value = false
})
provide('asideVisible', asideVisible)
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

</style>

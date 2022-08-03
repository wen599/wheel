<template>
  <GridPage></GridPage>
  <InputPage></InputPage>
  <SwitchPage></SwitchPage>
  <div>
    <ButtonPage></ButtonPage>
  </div>

  <dialog-page></dialog-page>
  <button @click="test">111</button>
  <TabsPage></TabsPage>
</template>
<script setup lang="ts">
import SwitchPage from '@/components/SwitchPage.vue'
import ButtonPage from '@/components/ButtonPage.vue'
import DialogPage from '@/components/DialogPage.vue'
import TabsPage from '@/components/TabsPage.vue'
import InputPage from '@/components/InputPage.vue'
import GridPage from '@/components/GridPage.vue'

import { showDialog } from '@/lib/Dialog'

const test = () => {
  showDialog({
    title: '自定义标题',
    content: '自定义内容',
    confirm: () => {
      console.log('confirm')
    },
    cancel: () => {
      console.log('cancel')
    },
    onClickMaskClose: false
  })
}
</script>

<style   lang="scss" >

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>

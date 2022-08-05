<template>
  <CollapsePage></CollapsePage>
  <ToastPage></ToastPage>
  <LayoutPage></LayoutPage>
  <GridPage></GridPage>
  <InputPage></InputPage>
  <SwitchPage></SwitchPage>
  <div>
    <ButtonPage></ButtonPage>
  </div>

  <dialog-page></dialog-page>
  <button @click="test">111</button>
  <TabsPage></TabsPage>
  <button @click="value=!value">111</button>
<transition name="fade">
  <div class="test" v-if="value"></div>
</transition>
</template>
<script setup lang="ts">
import SwitchPage from '@/components/SwitchPage.vue'
import ButtonPage from '@/components/ButtonPage.vue'
import DialogPage from '@/components/DialogPage.vue'
import TabsPage from '@/components/TabsPage.vue'
import InputPage from '@/components/InputPage.vue'
import GridPage from '@/components/GridPage.vue'
import LayoutPage from '@/components/LayoutPage.vue'
import ToastPage from '@/components/ToastPage.vue'
import CollapsePage from '@/components/CollapsePage.vue'

import { showDialog } from '@/lib/Dialog'
import { ref } from 'vue'

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
const value = ref(false)

</script>

<style   lang="scss" >
.test{
  width: 200px;
  height: 200px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  background-color: red;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.fade-enter-from,
.fade-leave-to{
  opacity: 0;
  transform: translate(-50%,-100%);
}
.fade-enter-active,
.fade-leave-active {
  transition: all 1s;

}

</style>

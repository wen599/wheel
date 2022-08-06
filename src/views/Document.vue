<template>
  <Title></Title>
  <i class="iconfont icon-fenlei" @click="visible=!visible"></i>
  <div class="container">
      <transition  name="aside-fade">
        <aside class="aside" v-if="visible" >
          <h3>介绍</h3>
          <router-link to="/document/introduce">介绍</router-link>
          <router-link to="/document/start">开始使用</router-link>
          <h3>组件列表</h3>
          <router-link to="/document/switch">Switch</router-link>
          <router-link to="/document/button">Button</router-link>
          <router-link to="/document/tabs">Tabs</router-link>
          <router-link to="/document/dialog">Dialog</router-link>
          <router-link to="/document/toast">Toast</router-link>
          <router-link to="/document/popover">Popover</router-link>
          <router-link to="/document/collapse">Collapse</router-link>
          <router-link to="/document/grid">Grid</router-link>
          <router-link to="/document/input">Input</router-link>
          <router-link to="/document/layout">Layout</router-link>
        </aside>
      </transition>
        <main class="main" >
            <router-view></router-view>
        </main>
  </div>
</template>

<script setup lang='ts'>
import Title from '@/components/Commonality/Title.vue'
import { ref } from 'vue'
const visible = ref(true)
window.onresize = () => {
  if (window.innerWidth > 500) {
    visible.value = true
  }
}

</script>

<style scoped lang='scss'>
.icon-fenlei{
  display: none;
  position: fixed;
  left: 20px;
  top: 16px;
  z-index: 10;
  font-size: 25px;
  cursor: pointer;
 @media (max-width: 500px) {
   display: block;
 }
}
.container{
  display: flex;
  height: 100vh;
  padding-top:60px ;
}
.aside{
  padding: 10px 20px 0 30px;
  background-color: #f5f6f6;
  white-space: nowrap;
  >a{
    display: block;
    padding: 5px 10px;
    color: #737d91;
    &:hover{
      color: #222222;
    }
    &.router-link-active{
      color: #222222;
    }
  }
  >h3{
    line-height: 2rem;
  }
  @media (max-width: 500px) {
    position: fixed;
    height: 100vh;
    left: 0;
    top: 60px;
    z-index: 8;
    background-color: rgba(245, 246, 246,0.9);
  }
}
.main{
  width: 100%;
  height: 100%;
  //background-color: #c9d3d1;
  overflow: auto;
  padding: 20px 20px 0 20px;
  @media (max-width: 500px) {
    padding:20px 0;
  }
}
.aside-fade-enter-from,
.aside-fade-leave-to{
  opacity: 0;
}
.aside-fade-enter-active,
.aside-fade-leave-active{
  transition: opacity 250ms;
}
</style>

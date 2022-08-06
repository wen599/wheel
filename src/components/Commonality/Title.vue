<template>
  <div class="home-title">
    <div class="title-icon" @click="gotoHome">
      <i class="iconfont icon-chongwutubiao23"></i>
    </div>
    <div class="title-nav">
      <router-link to="/home" class="home">首页</router-link>
      <router-link to="/document" class="document">文档</router-link>
    </div>
  </div>
</template>

<script setup lang='ts'>

import { useRouter } from 'vue-router'

const router = useRouter()
const gotoHome = () => {
  router.push('/home')
}
</script>

<style scoped lang='scss'>
.home-title{
  height: 60px;
  background-color: #e4e9ed;
  padding: 5px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  box-shadow: 0px 5px 10px rgba(0,0,0,0.15);
  z-index: 9;
}
.icon-chongwutubiao23{
  font-size: 50px;
  color: #4a5462;
  cursor: pointer;
}
.title-nav>a{
  color: #737d91;
  padding: 0 20px;
  outline: none;
  &.router-link-active{
    color: #222222;
    position: relative;
    &:before{
      content: '';
      display: block;
      position: absolute;
      right: 12px;
      bottom: -20px;
      width: 40px;
      height: 2px;
      z-index: 55;
      background-color: #737d91;
    }
  }
  &:hover{
    color: #242424;
  }

}
@media (max-width: 500px) {
.home-title{
  justify-content: center;
}
  .title-nav{
    display: none;
  }
}
</style>

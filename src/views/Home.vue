<template>
<Title></Title>
  <div class="container">
    <div class="text">
      <h2>Cat UI</h2>
      <h4>仅供学习</h4>
    </div>
    <div class="link">
      <a href="https://github.com/wen599/wheel">
        <Button theme="info" class="button">github</Button>
      </a>
      <a href="https://gitee.com/wen-599/wheel">
        <Button theme="info" class="button">gitee</Button>
      </a>
        <Button theme="info" class="button" @click="gotuHome">开始使用</Button>
    </div>
  </div>
</template>

<script setup lang='ts'>
import Title from '@/components/Commonality/Title.vue'
import Button from '@/lib/Button.vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const gotuHome = () => {
  router.push('/document')
}
</script>

<style scoped lang='scss'>
.container{
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color:#f5f6f6;
}
.text{
  color: #737d91;;
  text-align: center;
  margin-bottom: 50px;
}
.button{
  background-color: #e4e9ed;
  color: #737d91;
  margin: 0 5px;
}
</style>

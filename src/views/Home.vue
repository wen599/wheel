<template>
  <TopNav/>
  <main class="home-main">
    <h1>小文造轮子</h1>
    <h2>一个自制轮子,仅供学习</h2>
    <div class="home-main-link">
        <a href="https://github.com/wen599">GitHub</a>
        <router-link to="/doc">开始</router-link>
    </div>
  </main>
</template>

<script>
import TopNav from '@/components/TopNav.vue'

export default {
  name: 'Home',
  components: { TopNav }

}
</script>

<style lang="scss" scoped>
.home-main{
  padding-top: 50px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(149deg, rgba(238,231,218,1) 0%, rgba(170,215,224,1) 100%);
  font-size: 12px;
  color: #005967;
  h1{
    margin-bottom: 20px;
  }
  .home-main-link{
    margin-top: 20px;
    a{
      //background-color: #fff;
      border: 1px solid #01cfe1;
      margin: 0 10px;
      padding: 3px 6px ;
      border-radius: 16px;
      &:hover{
      background-color: rgba(48, 210, 243, 0.1);
      }
    }
  }
}
</style>

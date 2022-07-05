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
  // eslint-disable-next-line vue/multi-word-component-names
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
  background-color: aquamarine;
  font-size: 12px;
  .home-main-link{
    margin-top: 20px;
    a{
      background-color: #fff;
      margin: 0 10px;
      padding: 5px 10px ;
      border-radius: 20px;
    }
  }
}
</style>

<template>
  <header class="topnav-header">
    <span class="topnav-option" @click="ToggleVisible" v-if="option">
      <img src="../assets/list-copy.png">
    </span>
    <div class="topnav-logo" @click="gotoHome" >
      <h3>小文造轮子</h3>
    </div>

    <ul class="topnav-nav">
      <li><router-link to="/doc/intro">
        文档
      </router-link></li>
    </ul>
  </header>
</template>

<script>
import { inject } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'TopNav',
  props: {
    option: {
      type: Boolean,
      default: false
    }
  },
  setup () {
    // 隐藏侧边栏
    const asideVisible = inject('asideVisible')
    const ToggleVisible = () => {
      asideVisible.value = !asideVisible.value
    }
    // 返回首页
    const router = useRouter()
    const gotoHome = () => {
      router.push({ name: 'home' })
    }
    return { ToggleVisible, gotoHome }
  }
}
</script>

<style lang="scss" scoped>
  .topnav-header{
    position: fixed;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    top: 0;
    left: 0;
    width: 100vw;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    padding: 0 25px;
    border: 1px solid rgba(255,255,255,0.1);
    .topnav-logo{
      cursor:pointer;
    }
    .topnav-option{
      position: absolute;
      left: 15px;
      top: 15px;
      width: 20px;
      height: 20px;
      display: none;
      >img{
        width: 100%;
        height: 100%;
        position: absolute;
      }
    }
        .topnav-nav{
          display: flex;
              li{
                margin: 0 10px;
              }
        }
    @media (max-width: 500px) {
      .topnav-logo{
        margin: 0 auto;
      }
      .topnav-option{

        display: inline-block;
      }
      .topnav-nav{
        display: none;
      }
    }
  }
</style>

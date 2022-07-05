<template>
  <header class="topnav-header">
    <span class="topnav-option" @click="ToggleVisible" v-if="option">

    </span>
    <div class="topnav-logo" @click="gotoHome" >
      <h2>小文造轮子</h2>
    </div>

    <ul class="topnav-nav">
      <li>菜单1</li>
      <li>菜单2</li>
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
    background-color: aqua;
    font-size: 12px;
    .topnav-logo{
      cursor:pointer;
    }
    .topnav-option{
      position: absolute;
      left: 15px;
      top: 15px;
      width: 20px;
      height: 20px;
      background-color: indianred;
      display: none;
    }
        .topnav-nav{
          display: flex;
              li{
                margin: 0 10px;
                outline: 1px solid indianred;
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

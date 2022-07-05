<template>
  <header class="topnav-header">
    <div class="topnav-logo">
      <h2>小文造轮子</h2>
    </div>
    <ul class="topnav-nav">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'TopNav'
}
</script>

<style lang="scss" scoped>
  .topnav-header{
    position: fixed;
    display: flex;
    justify-content: space-between;
    top: 0;
    left: 0;
    width: 100vw;
    height: 50px;
    line-height: 50px;
    background-color: aqua;
    font-size: 12px;
        .topnav-nav{
          display: flex;
              li{
                margin: 0 10px;
                outline: 1px solid indianred;
              }
        }
  }
</style>

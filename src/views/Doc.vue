<template>
  <TopNav :option="true" class="doc-topnav"/>
  <div class="doc-content" >
    <aside class="doc-aside" v-if="asideVisible">
      <div class="doc-aside-components">
        <router-link to="/doc/intro">文档</router-link>
      </div>
      <ul>
        <li>
          <router-link to="/doc/intro">介绍</router-link>
        </li>

        <li>
          <router-link to="/doc/install">安装</router-link>
        </li>
      </ul>
      <div class="doc-aside-components">
        <router-link to="/doc/switch">组件列表</router-link>
      </div>
      <ul>
        <li>
          <router-link to="/doc/switch">Switch组件</router-link>
        </li>
        <li>
          <router-link to="/doc/button">Button组件</router-link>
        </li>
        <li>
          <router-link to="/doc/dialog">Dialog组件</router-link>
        </li>
        <li>
          <router-link to="/doc/tabs">Tabs组件</router-link>
        </li>
        <li>
          <router-link to="/doc/input">Input组件</router-link>
        </li>
        <li>
          <router-link to="/doc/grid">栅格</router-link>
        </li>
        <li>
          <router-link to="/doc/layout">Layout布局</router-link>
        </li>
        <li>
          <router-link to="/doc/toast">Toast</router-link>
        </li>
        <li>
          <router-link to="/doc/collapse">Collapse</router-link>
        </li>
      </ul>

    </aside>
    <main class="doc-main" @click="closeAside">
        <div class="doc-main-wapper">
          <router-view></router-view>

        </div>
    </main>
  </div>

</template>

<script>
import TopNav from '@/components/TopNav.vue'
import { inject } from 'vue'
export default {
  name: 'Doc',
  components: { TopNav },
  setup () {
    // 获取是否显示aside
    const asideVisible = inject('asideVisible')

    // 点击外面关闭侧边栏
    const closeAside = () => {
      if (window.innerWidth < 500) asideVisible.value = false
    }
    return { asideVisible, closeAside }
  }

}
</script>

<style lang="scss" >
.doc-topnav{
  z-index: 1;
  background: linear-gradient(150deg, rgba(238,231,218,1) 0%, rgb(133, 201, 215) 100%);

}
.doc-content{
  background: linear-gradient(149deg, rgba(238,231,218,1) 0%, rgba(170,215,224,1) 100%);
  display: flex;
  font-size: 24px;
  .doc-main{
    //background-color: #f0f0f0;
    flex: 1;
    display: flex;
    justify-content: center;
    min-height: 100vh;
    font-size: 16px;
    min-width: 800px;
    overflow: auto;
    .markdown-body{
      background-color: transparent;
      pre{
        background-color: rgba(137, 221, 238, 0.2);
      }
    }
    @media (max-width: 700px) {
      min-width: 0px;
    }
    .doc-main-wapper{
      min-width: 800px;
      padding:70px  100px  0;
      background-color:rgba(255,255,255,0.3);
      height: 100%;
      @media (max-width: 700px) {
        min-width: 100%;
        padding: 70px 0  0;
      }
    }
   }
  .doc-aside{
    position: sticky;
    left: 0;
    top: 0;
    z-index: 1;
    padding:50px 0 25px 25px ;
    //background-color: #e1e4db;
    //margin-right:10px ;
    //background-color:rgba(170,215,224,1);
    height: 100vh;
    min-width:300px;
    overflow: auto;
    font-size: 18px;
    color: #005967;
    border-right: 1px solid rgba(0,0,0,0.1) ;
    @media (max-width: 700px) {
      min-width:100px;
      padding:50px 10px;
    }
    .doc-aside-components{
      margin: 10px 0;
      font-weight: 600;
    }
    li {
      margin: 5px 0;
      color: #0292a9;
      font-size: 16px;
      .router-link-active{
        color: #03c9ee;
      }
    }
  }
}
</style>

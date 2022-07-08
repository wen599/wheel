<template>
  <TopNav :option="true"/>
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
      </ul>
    </aside>
    <main class="doc-main" @click="closeAside">
      <router-view></router-view>
    </main>
  </div>

</template>

<script>
import TopNav from '@/components/TopNav.vue'
import { inject } from 'vue'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
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
.doc-content{
  //background: linear-gradient(149deg, rgba(238,231,218,1) 0%, rgba(170,215,224,1) 100%);
  display: flex;
  font-size: 24px;
  .doc-main{
    flex: 1;
    min-height: 100vh;
    padding-top:60px;
    max-height: 100vh;
    overflow: auto;
    font-size: 16px;
   }
  .doc-aside{
    padding:50px 25px 25px ;
    margin-right:10px ;
    background-color:rgba(170,215,224,1);
    height: 100vh;
    min-width:200px;
    overflow: auto;
    font-size: 18px;
    color: #005967;
    @media (max-width: 500px) {
      min-width:100px;
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

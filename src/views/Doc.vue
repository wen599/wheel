<template>
  <TopNav :option="true"/>
  <div class="doc-content" >
    <aside class="doc-aside" v-if="asideVisible">
      <div class="doc-aside-components">组件列表</div>
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
  display: flex;
  .doc-main{
    flex: 1;
    min-height: 100vh;
    padding-top:60px;
    max-height: 100vh;
    overflow: auto;
   }
  .doc-aside{
    padding:50px 20px 20px ;
    margin-right:10px ;
    background-color: aquamarine;
    height: 100vh;
    min-width: 100px;
    overflow: auto;
    .doc-aside-components{
      margin: 10px 0;
      font-weight: 600;
    }
    li {
      margin: 5px 0;
      font-size: 16px;
      color: rgb(204, 203, 203);
      .router-link-active{
        color: #ff7fa5;
      }
    }
  }
}
</style>

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
    const asideVisible = inject('asideVisible')
    const ToggleVisible = () => {
      asideVisible.value = !asideVisible.value
    }

    // 点击外面关闭侧边栏
    const closeAside = () => {
      if (asideVisible.value && window.innerWidth < 500) asideVisible.value = false
    }
    return { asideVisible, ToggleVisible, closeAside }
  }

}
</script>

<style lang="scss" >
.doc-content{
  display: flex;
  .doc-main{
    flex: 1;
    min-height: 100vh;
    padding-top:50px;
    background-color: indianred;
   }
  .doc-aside{
    padding-top:50px;
    background-color: aquamarine;
    max-width: 100px;
    min-height: 100vh;
  }
}
</style>

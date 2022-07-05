<template>
  <TopNav/>
  <div class="doc-content">
    <aside class="doc-aside">
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
    <main class="doc-main">
      11111
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import TopNav from '@/components/TopNav'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Doc',
  components: { TopNav }

}
</script>

<style lang="scss" >
.doc-content{
  display: flex;
  .doc-main{
    flex: 1;
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

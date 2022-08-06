<template>
  <Layout class="container">
    <Header class="demo"></Header>
    <Layout>
      <Aside class="demo"></Aside>
      <Content class="demo"></Content>
    </Layout>
    <Footer class="demo"></Footer>
  </Layout>
</template>

<script setup lang='ts'>
import Layout from '@/lib/Layout/Layout.vue'
import Header from '@/lib/Layout/Header.vue'
import Footer from '@/lib/Layout/Footer.vue'
import Content from '@/lib/Layout/Content.vue'
import Aside from '@/lib/Layout/Aside.vue'
</script>

<style scoped lang='scss'>
.container{
  height: 300px;
}
.demo{
  border: 1px solid darkgreen;
}
</style>

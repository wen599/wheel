<template>
<Layout class="container">
  <Header class="demo"></Header>
  <Content class="demo"></Content>
  <Footer class="demo"></Footer>
</Layout>
  <Layout class="container">
    <Header class="demo"></Header>
    <Layout>
      <Aside class="demo"></Aside>
      <Content class="demo"></Content>
    </Layout>
    <Footer class="demo"></Footer>
  </Layout>

  <Layout class="container">
    <Header class="demo"></Header>
    <Layout>
      <Content class="demo"></Content>
      <Aside class="demo"></Aside>
    </Layout>
    <Footer class="demo"></Footer>
  </Layout>

  <Layout class="container">
    <Aside class="demo" >

    </Aside>
    <Layout  >
      <Header class="demo"></Header>
      <Content class="demo"></Content>
      <Footer class="demo"></Footer>
    </Layout>
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
  width: 500px;
  height: 500px;
  margin-top: 20px;
}
.demo{
  border: 1px solid darkgreen;
}
</style>

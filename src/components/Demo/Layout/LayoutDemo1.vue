<template>
  <Layout class="container">
    <Header class="demo"></Header>
    <Content class="demo"></Content>
    <Footer class="demo"></Footer>
  </Layout>
</template>

<script setup lang='ts'>
import Layout from '@/lib/Layout/Layout.vue'
import Header from '@/lib/Layout/Header.vue'
import Footer from '@/lib/Layout/Footer.vue'
import Content from '@/lib/Layout/Content.vue'
</script>

<style scoped lang='scss'>
.container{
  height: 300px;
}
.demo{
  border: 1px solid darkgreen;
}
</style>

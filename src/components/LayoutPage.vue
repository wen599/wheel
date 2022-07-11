<template>
  <Layout class="container">
    <Side  class="item"></Side>

    <Layout>
      <Header class="item"></Header>

      <Content class="item"></Content>
      <Footer class="item"></Footer>

    </Layout>
  </Layout>
</template>

<script>
import Layout from '@/lib/Layout/Layout'
import Header from '@/lib/Layout/Header'
import Content from '@/lib/Layout/Content'
import Side from '@/lib/Layout/Side'
import Footer from '@/lib/Layout/Footer'

export default {
  name: 'LayoutPage',
  components: {
    Layout,
    Header,
    Content,
    Side,
    Footer
  }
}
</script>

<style lang="scss" scoped>
.container{
  outline: 1px solid darkcyan;
   height: 800px;
  .item{
    outline: 1px solid darkgreen;
  }
}
</style>

<template>
    <Row class="container" >
      <Col span="24" class="item" :lg="{span:8}">111</Col>
      <Col span="24" class="item" :lg="{span:8}">111</Col>
      <Col span="24" class="item" :lg="{span:8}">111</Col>
      <Col span="24" class="item" :lg="{span:8}">111</Col>
    </Row>
</template>

<script>
import Row from '@/lib/w-row.vue'
import Col from '@/lib/w-col.vue'
export default {

  name: 'gridPage',
  // eslint-disable-next-line vue/no-unused-components
  components: { Row, Col }

}
</script>

<style lang="scss" scoped>
.container{
  outline: 1px solid darkgreen;
  .item{
    outline: 1px solid darkcyan;
    background-color: #ff7fa5;
  }
}
</style>

<template>
  <Row class="row" gutter="20">
    <Col class="col" ><p class="item"></p></Col>
    <Col class="col" ><p class="item"></p></Col>
    <Col class="col" ><p class="item"></p></Col>
    <Col class="col" ><p class="item"></p></Col>

  </Row>

</template>

<script setup lang='ts'>
import Row from '@/lib/Grid/Row.vue'
import Col from '@/lib/Grid/Col.vue'

</script>

<style scoped lang='scss'>

.col{
  height: 50px;
  //outline: 1px solid darkcyan;
}
.item{
  height: 50px;
  background-color: #4a5462;
}
</style>

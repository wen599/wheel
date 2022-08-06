<template>
  <Row>
    <Col class="col"></Col>
  </Row>
  <Row>
    <Col class="col"></Col>
    <Col class="col"></Col>
  </Row>
  <Row>
    <Col class="col"></Col>
    <Col class="col"></Col>
    <Col class="col"></Col>
  </Row>
</template>

<script setup lang='ts'>
import Row from '@/lib/Grid/Row.vue'
import Col from '@/lib/Grid/Col.vue'

</script>

<style scoped lang='scss'>
.row{
  margin-top: 20px;
}
.col{
  height: 50px;
  outline: 1px solid darkcyan;
}
</style>

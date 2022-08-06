<template>
  <Row class="row">
    <Col class="col" span="2"></Col>
    <Col class="col" span="10"></Col>
    <Col class="col" span="10"></Col>
    <Col class="col" span="2"></Col>
  </Row>
  <Row>
    <Col class="col" span="8"></Col>
    <Col class="col" span="4"></Col>
    <Col class="col" span="4"></Col>
    <Col class="col" span="8"></Col>
  </Row>
</template>

<script setup lang='ts'>
import Row from '@/lib/Grid/Row.vue'
import Col from '@/lib/Grid/Col.vue'

</script>

<style scoped lang='scss'>

.col{
  height: 50px;
  outline: 1px solid darkcyan;
}
</style>

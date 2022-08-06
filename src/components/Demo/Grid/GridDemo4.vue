<template>
  <Row class="row" >
    <Col class="col" span="4" offset="1"><p class="item"></p></Col>
    <Col class="col" span="8" offset="2"><p class="item"></p></Col>
    <Col class="col" span="4" offset="3"><p class="item"></p></Col>
    <Col class="col" span="1" offset="1"><p class="item"></p></Col>
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

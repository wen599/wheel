<template>
    <Row>
      <Col>111</Col>
      <Col>222</Col>
    </Row>
  <Row>
      <Col>111</Col>
      <Col>222</Col>
      <Col>333</Col>
    </Row>
  <Row>
    <Col>111</Col>
    <Col>222</Col>
    <Col>333</Col>
    <Col>444</Col>
  </Row>
  <Row>
    <Col span="2">1</Col>
    <Col span="22">11</Col>
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

<style scoped>

</style>

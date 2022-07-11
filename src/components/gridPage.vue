<template>
    <Row class="container" >
      <Col
        span="24"
        class="item"
        :xm="{span:12}"
        :md="{span:8}"
        :lg="{span:6}"
        :xl="{span:4}"
        :xxl="{span:3}"
      >111</Col>
      <Col
        span="24"
        class="item"
        :xm="{span:12}"
        :md="{span:8}"
        :lg="{span:6}"
        :xl="{span:4}"
        :xxl="{span:3}"
      >111</Col>
      <Col
        span="24"
        class="item"
        :xm="{span:12}"
        :md="{span:8}"
        :lg="{span:6}"
        :xl="{span:4}"
        :xxl="{span:3}"
      >111</Col>
      <Col
        span="24"
        class="item"
        :xm="{span:12}"
        :md="{span:8}"
        :lg="{span:6}"
        :xl="{span:4}"
        :xxl="{span:3}"
      >111</Col>
      <Col
        span="24"
        class="item"
        :xm="{span:12}"
        :md="{span:8}"
        :lg="{span:6}"
        :xl="{span:4}"
        :xxl="{span:3}"
      >111</Col>
      <Col
        span="24"
        class="item"
        :xm="{span:12}"
        :md="{span:8}"
        :lg="{span:6}"
        :xl="{span:4}"
        :xxl="{span:3}"
      >111</Col>
      <Col
        span="24"
        class="item"
        :xm="{span:12}"
        :md="{span:8}"
        :lg="{span:6}"
        :xl="{span:4}"
        :xxl="{span:3}"
      >111</Col>
      <Col
        span="24"
        class="item"
        :xm="{span:12}"
        :md="{span:8}"
        :lg="{span:6}"
        :xl="{span:4}"
        :xxl="{span:3}"
      >111</Col>
    </Row>

</template>

<script>
import Row from '@/lib/Row.vue'
import Col from '@/lib/Col.vue'
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

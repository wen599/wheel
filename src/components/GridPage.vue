<template>
<div class="container">
    <Row gutter="20">
      <Col span="1" :xl="{span:2}" :lg="{span:4}" :md="{span:6}" :xm="{span:8}" :xs="{span:12}"> <p class="ttt" >1</p></Col>
      <Col span="1" :xl="{span:2}" :lg="{span:4}" :md="{span:6}" :xm="{span:8}" :xs="{span:12}"> <p class="ttt" >1</p></Col>
      <Col span="1" :xl="{span:2}" :lg="{span:4}" :md="{span:6}" :xm="{span:8}" :xs="{span:12}"> <p class="ttt" >1</p></Col>
      <Col span="1" :xl="{span:2}" :lg="{span:4}" :md="{span:6}" :xm="{span:8}" :xs="{span:12}"> <p class="ttt" >1</p></Col>
      <Col span="1" :xl="{span:2}" :lg="{span:4}" :md="{span:6}" :xm="{span:8}" :xs="{span:12}"> <p class="ttt" >1</p></Col>
      <Col span="1" :xl="{span:2}" :lg="{span:4}" :md="{span:6}" :xm="{span:8}" :xs="{span:12}"> <p class="ttt" >1</p></Col>
      <Col span="1" :xl="{span:2}" :lg="{span:4}" :md="{span:6}" :xm="{span:8}" :xs="{span:12}"> <p class="ttt" >1</p></Col>
    </Row>
</div>
</template>

<script setup lang='ts'>
import Row from '@/lib/Grid/Row.vue'
import Col from '@/lib/Grid/Col.vue'

</script>

<style scoped lang='scss'>
.container{
  width: 500px;
  margin: 0 auto 50px;
  border: 4px solid  saddlebrown;
}
.ttt{
  height: 50px;
  background-color: red;
  outline: 1px solid darkgreen;
}
</style>

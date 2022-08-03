<template>
  <div>
    <Button size="large"></Button>
    <Button theme="primary"  size="large" >Primary</Button>
    <Button theme="success"  size="large">Success</Button>
    <Button theme="info" size="large">Info</Button>
    <Button theme="warning" size="large">Warning</Button>
    <Button theme="danger" size="large">Danger</Button>
  </div>
  <div>
    <Button ></Button>
    <Button theme="primary"  >Primary</Button>
    <Button theme="success" >Success</Button>
    <Button theme="info" >Info</Button>
    <Button theme="warning" >Warning</Button>
    <Button theme="danger" >Danger</Button>
  </div>
<div>
  <Button size="small"></Button>
  <Button theme="primary" size="small" >Primary</Button>
  <Button theme="success" size="small">Success</Button>
  <Button theme="info" size="small">Info</Button>
  <Button theme="warning" size="small">Warning</Button>
  <Button theme="danger" size="small">Danger</Button>
</div>
  <div>
    <Button  plain size="large"> </Button>
    <Button theme="primary"  plain size="large">Primary</Button>
    <Button theme="success" plain size="large">Success</Button>
    <Button theme="info" plain size="large">Info</Button>
    <Button theme="warning" plain size="large">Warning</Button>
    <Button theme="danger" plain size="large">Danger</Button>
  </div>
  <div>
    <Button  plain></Button>
    <Button theme="primary"  plain>Primary</Button>
    <Button theme="success" plain>Success</Button>
    <Button theme="info" plain>Info</Button>
    <Button theme="warning" plain>Warning</Button>
    <Button theme="danger" plain>Danger</Button>
  </div>
  <div>
    <Button  plain size="small"></Button>
    <Button theme="primary"  plain size="small">Primary</Button>
    <Button theme="success" plain size="small">Success</Button>
    <Button theme="info" plain size="small">Info</Button>
    <Button theme="warning" plain size="small">Warning</Button>
    <Button theme="danger" plain size="small">Danger</Button>
  </div>
  <div>
    <Button  round size="small"></Button>
    <Button theme="primary"  round size="small">Primary</Button>
    <Button theme="success" round size="small">Success</Button>
    <Button theme="info" round size="small">Info</Button>
    <Button theme="warning" round size="small">Warning</Button>
    <Button theme="danger" round y>Danger</Button>
  </div>
  <div>
  <Button  round></Button>
    <Button theme="primary"  round>Primary</Button>
    <Button theme="success" round>Success</Button>
    <Button theme="info" round>Info</Button>
    <Button theme="warning" round>Warning</Button>
    <Button theme="danger" round>Danger</Button>
  </div>
  <div>
    <Button  round size="large"></Button>
    <Button theme="primary"  round size="large">Primary</Button>
    <Button theme="success" round size="large">Success</Button>
    <Button theme="info" round size="large">Info</Button>
    <Button theme="warning" round size="large">Warning</Button>
    <Button theme="danger" round size="large">Danger</Button>
  </div>

  <div>
    <Button  circle icon="icon-sousuo" size="large"></Button>
    <Button theme="primary"  circle icon="icon-bianji" size="large"></Button>
    <Button theme="success" circle  icon="icon-duigou" size="large"></Button>
    <Button theme="info" circle icon="icon-youjian_o" size="large"></Button>
    <Button theme="warning" circle icon="icon-shoucang" size="large"></Button>
    <Button theme="danger" circle icon="icon-shanchu" size="large"></Button>
  </div>
  <div>
    <Button  circle icon="icon-sousuo"></Button>
    <Button theme="primary"  circle icon="icon-bianji"></Button>
    <Button theme="success" circle  icon="icon-duigou"></Button>
    <Button theme="info" circle icon="icon-youjian_o"></Button>
    <Button theme="warning" circle icon="icon-shoucang"></Button>
    <Button theme="danger" circle icon="icon-shanchu"></Button>
  </div>

  <div>
    <Button  circle icon="icon-sousuo" size="small"></Button>
    <Button theme="primary"  circle icon="icon-bianji" size="small"></Button>
    <Button theme="success" circle  icon="icon-duigou" size="small"></Button>
    <Button theme="info" circle icon="icon-youjian_o" size="small"></Button>
    <Button theme="warning" circle icon="icon-shoucang" size="small"></Button>
    <Button theme="danger" circle icon="icon-shanchu" size="small"></Button>
  </div>
  <div>
    <Button  link size="large"></Button>
    <Button theme="primary"  link size="large"></Button>
    <Button theme="success" link size="large"></Button>
    <Button theme="info" link size="large"></Button>
    <Button theme="warning" link size="large"></Button>
    <Button theme="danger" link size="large"></Button>
    <Button  link ></Button>
    <Button theme="primary"  link></Button>
    <Button theme="success" link ></Button>
    <Button theme="info" link></Button>
    <Button theme="warning" link></Button>
    <Button theme="danger" link></Button>
    <Button  link size="small"></Button>
    <Button theme="primary"  link size="small"></Button>
    <Button theme="success" link  size="small"></Button>
    <Button theme="info" link size="small"></Button>
    <Button theme="warning" link size="small"></Button>
    <Button theme="danger" link size="small"></Button>
  </div>
  <Button :disabled="true" @click="test" @focus="test"  theme="primary"></Button>
  <Button :disabled="true" @click="test" @focus="test"  theme="success"></Button>
  <Button :disabled="true" @click="test" @focus="test"  theme="info"></Button>
  <Button :disabled="true" @click="test" @focus="test"  theme="warning"></Button>
  <Button :disabled="true" @click="test" @focus="test"  theme="danger"></Button>
  <Button :disabled="true" @click="test" @focus="test" ></Button>

  <div>
    <Button :loading="true" @click="test" @focus="test"  theme="primary"></Button>
    <Button :loading="true" @click="test" @focus="test"  theme="success"></Button>
    <Button :loading="true" @click="test" @focus="test"  theme="info"></Button>
    <Button :loading="true" @click="test" @focus="test"  theme="warning"></Button>
    <Button :loading="true" @click="test" @focus="test"  theme="danger"></Button>
    <Button :loading="true" @click="test" @focus="test" ></Button>
  </div>
</template>

<script setup lang='ts'>
import Button from '@/lib/Button.vue'
const test = () => {
  console.log(1)
}
</script>

<style scoped lang='scss'>

</style>

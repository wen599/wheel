<template>
  <div class="demo">
    <div class="demo-title">
      <h3>{{ props.title }}</h3>
      <p v-if="props.text">{{props.text}}</p>
    </div>
    <div class="demo-component">
      <slot name="demo"></slot>
    </div>
    <div class="demo-actions">
      <Button @click="visible=!visible" @blur="visible=false">查看代码</Button>
    </div>
    <div class="demo-code" v-if="visible">
        <slot name="code"></slot>
    </div>
  </div>
</template>

<script setup lang='ts'>
import Button from '@/lib/Button.vue'
import { ref } from 'vue'
const visible = ref(false)

type Props={
  title:string
  text?:string
}
const props = defineProps<Props>()

</script>

<style scoped lang='scss'>

.demo{
  display: inline-block;
  vertical-align: top;
  margin: 20px 30px;
  width: 600px;
  border: 1px solid #e4e9ed;
  background-color: #f8fafd;
  border-radius: 20px;
  overflow: hidden;
  @media (max-width: 500px) {
    width: 100%;
    margin: 20px 0;
  }
  //padding: 0 20px;
  .demo-title{
    >p{
      margin-top: 10px;
    }
    padding: 20px ;
    border-bottom: 1px solid #e4e9ed;
  }
  .demo-component{
    padding: 20px ;
    border-bottom: 1px solid #e4e9ed;
  }
  .demo-actions{
    padding: 20px ;
  }
  .demo-code{
    background-color: #f5f6f6;
  }
}
</style>

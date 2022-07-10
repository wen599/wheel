<template>
  <div>
    <Input value="张三" disabled ></Input>
  </div>
  <div>
    <Input value="李四"></Input>
  </div>
  <div>
    <Input value="赵六" readonly></Input>
  </div>
  <div>
    <Input value="王五" error="长度必须在2-8位"></Input>
  </div>
  <div>
    <Input :value="value" @input="input"></Input>
    {{value}}
  </div>
</template>

<script>
import Input from '@/lib/Input'
import { ref } from 'vue'
export default {
  name: 'InputPage',
  components: { Input },
  setup () {
    const value = ref('李四')
    const input = (e) => {
      console.log(e)
    }
    return { value, input }
  }

}
</script>

<style lang="scss">
 .div{
   margin-bottom: 10px;
 }
</style>

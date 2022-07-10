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
  <Input value="赵六" readonly></Input>
  <Input value="赵六" readonly></Input>

</template>

<script>
import Input from '@/lib/Input'
export default {
  name: 'InputPage',
  components: { Input }

}
</script>

<style lang="scss">
 .div{
   margin-bottom: 10px;
 }
</style>

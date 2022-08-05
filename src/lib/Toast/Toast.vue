<template>
    <transition name="wheel-toast-fade" appear @after-leave="close" >
      <div class="wheel-toast"  v-if="visible" >{{props.content}}</div>
    </transition>
</template>

<script setup lang='ts'>
import { onMounted, ref } from 'vue'

type Props={
  time?:number,
  content?:string,
  type?:'success'|'warning'|'message'|'error'
  close?:()=>void
}
const props = withDefaults(defineProps<Props>(), {
  content: '默认提示内容',
  type: 'message',
  time: 3000
})
// 自动关闭
const visible = ref(true)
onMounted(() => {
  setTimeout(() => {
    visible.value = false
  }, props.time)
})

// type类型切换
const borderColor = ref('')
const backgroundColor = ref('')
const color = ref('')
const setType = (mainColor:string, asideColor:string, minor:string) => {
  color.value = mainColor
  borderColor.value = asideColor
  backgroundColor.value = minor
}

//

switch (props.type) {
  case 'warning':
    setType('#e6a23c', '#faecd8', '#fdf6ec')
    break
  case 'success':
    setType('#67c23a', '#e1f3d8', '#f0f9eb')
    break
  case 'message':
    setType('#909399', '#e9e9eb', '#f4f4f5')
    break
  case 'error':
    setType('#f56e6e', '#fde2e2', '#fef0f0')
    break
}

</script>

<style  lang='scss'>
.wheel-toast-container{
  position: fixed;
  left: 50%;
  top: 0;
  transform: translate(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.wheel-toast-fade-enter-from,
.wheel-toast-fade-leave-to{
  opacity: 0;
  transform: translateY(-100%);
}
.wheel-toast-fade-enter-active,
.wheel-toast-fade-leave-active{
 transition: all 500ms;
}
.wheel-toast{
  display: inline-block;
  margin-top: 10px;
  min-width: 200px;
  height: 50px;
  padding: 0 30px;
  line-height: 50px;
  text-align: center;
  border: 1px solid v-bind(borderColor);
  background-color: v-bind(backgroundColor);
  color: v-bind(color);
  border-radius: 5px;
}
</style>

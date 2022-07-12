<template>

     <div class="wheel-toast">
       <slot>默认提示内容</slot>
     </div>

</template>

<script>
export default {
  name: 'Toast',
  setup (props, context) {

  }
}
</script>

<style lang="scss" >
$font-size:16px;
$background-color: #53b9c7;
$border-radius:20px;
$color: #f5f5f5;
.wheel-toast-container{
  position: fixed;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  z-index: 9999;
}
.wheel-toast{
  margin-top: 10px;
  padding: 0.5em 1em;
  border-radius: $border-radius;
  font-size: $font-size;
  background-color:$background-color ;
  color: $color;
  animation: moveHide 3s;
}
@keyframes moveHide {
  0%{
    opacity: 0;
    transform: translateY(-100%);
  }

  10%,90%{
    opacity: 1;
    transform: translateY(0);
  }

  100%{
    opacity: 0;
    transform: translateY(-100%);
  }
}
</style>

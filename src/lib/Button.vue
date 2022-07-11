<template>
  <button class="wheel-button-container" :class="classes" :disabled="disabled" >
    <span class="wheel-button-loading" v-if="loading"> </span>
    <slot>默认按钮</slot>
  </button>
</template>

<script>
import { computed, toRefs } from 'vue'

export default {
  name: 'Button',
  props: {
    theme: {
      type: String,
      default: 'button'
    },
    size: {
      type: String,
      default: 'normal'
    },
    level: {
      type: String,
      default: 'normal'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  setup (props) {
    const { theme, size, level, loading } = toRefs(props)
    const classes = computed(() => {
      return {
        [`wheel-theme-${theme.value}`]: theme.value,
        [`wheel-size-${size.value}`]: size.value,
        [`wheel-level-${level.value}`]: level.value,
        [`wheel-loading-${loading.value}`]: loading.value
      }
    })
    return { classes }
  }
}
</script>

<style lang="scss">
  $h:32px;
  $blue: #4fa6ff;
  $border-color:#dcdfe6;

  @keyframes rotate {
    from{
      transform: rotateZ(0);
    }
    to{
      transform: rotateZ(360deg);
    }
  }
  .wheel-button-container{
    background-color: white;
    padding: 0 15px;
    border: 1px solid  $border-color;
    border-radius:$h/6 ;
    height: $h;
    outline: none;
    cursor: pointer;
    &.wheel-size-big{
      font-size: 20px;
      padding: 0 20px;
      height: 40px;
    }
    &.wheel-size-min{
      font-size: 12px;
      padding: 0 10px;
      height: 25px;
    }
    &.wheel-theme-link{
     border: none;
      background-color: transparent;
      color: $blue;
      &:hover{
        color: #4fbcff;
      }
    }
    &.wheel-theme-text{
      border: none;
      background-color: transparent;
      color: #505050;
      &:hover{
        color: #828282;
      }
    }

    &:hover{
      color:$blue;
      border-color: $blue;
    }
    &.wheel-level-main{
      color: #409eff;
    }
     &.wheel-level-main.wheel-theme-button{
      background-color: #409eff;
       color: white;
       &:hover{
         background-color: #58a8fc;
       }
    }
    &.wheel-level-danger.wheel-theme-button{
      background-color: rgba(255, 0, 0, 0.73);
      color: white;
      border: none;
      &:hover{
        background-color:rgba(255, 0, 0, 0.5);

      }
    }
    &.wheel-level-danger{
      color: red;
    }
    &[disabled]{
      color: #dcdfe6;
      background-color: #c8c8c8;
      border: none;
      cursor: no-drop;
      &:hover{
        color: #dcdfe6;
        background-color: #c8c8c8;
        border: none;
      }
    }
    &.wheel-theme-link[disabled],&.wheel-theme-text[disabled]{
      background-color: transparent;
    }
    &.wheel-loading-true{
      color: black;
      border: none;
      cursor: no-drop;
      background-color: #f5f5f5;
    }
    .wheel-button-loading{
      display: inline-block;
      width: 10px;
      height: 10px;
      background-color: transparent;
      border: 1px solid black;
      border-bottom: none;
      border-radius: 10px;
      animation: rotate 0.75s linear infinite;
    }
  }

</style>

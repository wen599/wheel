<template>
    <div class="wheel-collapse-item" >
      <div class="wheel-collapse-item-title" @click="changeContentVisible">
        <div class="wheel-collapse-item-title-text">{{title}}</div>
        <div class="wheel-collapse-item-title-icon" :class="classes">
          <i class="iconfont icon-jinrujiantou"  >
          </i>
        </div>
      </div>
        <div class="wheel-collapse-item-content" v-if="contentVisible">
          <slot></slot>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'Collapse-item',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup (props, context) {
    const contentVisible = ref(false)
    const classes = {
      down: false
    }
    const changeContentVisible = (e) => {
      contentVisible.value = !contentVisible.value
      classes.down = !classes.down
    }
    return { changeContentVisible, classes, contentVisible }
  }
}
</script>

<style lang="scss" >
$border-color: #8c8c8c;
$font-size:16px;
.wheel-collapse-item{
  cursor: pointer;
  font-size: $font-size;
  border-bottom: 1px solid $border-color;
  transition: height 1s;
  &:nth-child(1){
    border-top: 1px solid $border-color;
  }
  >.wheel-collapse-item-title{
    padding-right: 10px;
    display: flex;
    justify-content: space-between;
    line-height: 3em;
    >.wheel-collapse-item-title-icon{
      transition: transform 0.25s ;

    }
    >.down{
      transform: rotateZ(90deg);
    }
  }
  >.wheel-collapse-item-content{
    line-height: 1.5em;
  }
}

</style>

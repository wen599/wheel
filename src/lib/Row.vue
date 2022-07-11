<template>
  <div class="grid-row"
       :style="gutterStyle"
       :class="alignClass" >
    <slot ></slot>
  </div>
</template>

<script>
import { provide, toRefs } from 'vue'
export default {
  name: 'Row',
  props: {
    gutter: {
      type: [String, Number],
      default: 0
    },
    align: {
      type: String,
      validator (value) {
        return ['left', 'right', 'center'].includes(value)
      }
    }
  },
  setup (props, context) {
    const { gutter, align } = toRefs(props)

    provide('gutter', gutter.value)

    const gutterStyle = {
      margin: `0px ${-gutter.value / 2}px`
    }

    const alignClass = align.value && 'align-' + align.value
    return { gutterStyle, alignClass }
  }
}
</script>

<style lang="scss">
.grid-row{
  display: flex;
  flex-wrap: wrap;
  &.align-right{
    justify-content: right;
  }
  &.align-center{
    justify-content: center;
  }
}
</style>

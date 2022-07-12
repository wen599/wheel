<template>
  <div class="wheel-collapse" >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Collapse',
  props: {
    showAll: {
      type: Boolean,
      default: false
    }
  },
  setup (props, context) {
    const { slots } = context
    slots.default().forEach((item) => {
      if (item.type.name !== 'Collapse-item') {
        throw new Error('子组件必须是Collapse-item')
      }
    })
  }
}
</script>

<style lang="scss">

</style>

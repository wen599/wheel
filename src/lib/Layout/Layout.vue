<template>
  <div class="wheel-layout" :class="sideClass">

    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  setup (props, content) {
    const sideClass = {}
    const children = content.slots.default()
    children.forEach((item) => {
      if (item.type.name === 'Side') {
        sideClass.haiSide = true
      }
    })
    return { sideClass }
  }
}
</script>

<style lang="scss">
.wheel-layout{
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  &.haiSide{
    flex-direction: row;
  }
}
</style>

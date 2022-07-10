<template>
  <div class="grid-row">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'w-row'
}
</script>

<style lang="scss">
.grid-row{
display: flex;
}
</style>

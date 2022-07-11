<template>
  <div class="wheel-content">
    <slot></slot>
    content
    </div>
</template>

<script>
export default {
  name: 'Content'
}
</script>

<style lang="scss">
.wheel-content{
  flex-grow: 1;
}
</style>

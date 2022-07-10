<template>
<div class="grid-col" :class="`grid-col-${span}`">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'w-col',
  props: {
    span: {
      type: [String, Number]
    }
  }
}
</script>

<style lang="scss">
.grid-col{
  height: 100px;
  background-color: #ff7fa5;
  width: 50%;
  outline: 1px solid darkcyan;

 $class:grid-col-;
    @for $n from 1 through 24 {
     &.#{$class}#{$n}{
      width: ($n/24)*100%;
    }
  }
}
</style>

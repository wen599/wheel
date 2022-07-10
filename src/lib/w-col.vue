<template>
  <div
        class="grid-col"
        :class="classes"
        :style="gutterStyle"
  >
  <!--  {{gutter}}-->
    <slot></slot>
  </div>

</template>

<script>

import { inject, toRefs } from 'vue'
const proving = {
  type: Object,
  validator (value) {
    const keys = Object.keys(value)
    let valid = true
    keys.forEach((item) => {
      if (!['span', 'offset'].includes(item)) {
        valid = false
      }
    })
    return valid
  }
}

export default {
  name: 'w-col',
  props: {
    span: {
      type: [String, Number]
    },
    offset: {
      type: [String, Number]
    },
    xm: proving,
    md: proving,
    lg: proving,
    xl: proving,
    xxl: proving

  },
  setup (props, context) {
    const { span, offset, ...arg } = toRefs(props)
    const gutter = inject('gutter')

    const gutterStyle = {
      padding: `0px ${gutter / 2}px`
    }

    const argClasses = []

    for (const argKey in arg) {
      if (arg[argKey].value) {
        if (arg[argKey].value.span !== undefined) {
          argClasses.push(`grid-col-${argKey}-span-${arg[argKey].value.span}`)
        }
        if (arg[argKey].value.offset !== undefined) {
          argClasses.push(`grid-col-${argKey}-offset-${arg[argKey].value.offset}`)
        }
      }
    }
    const classes = [
      span.value && `grid-col-span-${span.value}`,
      offset.value && `grid-col-offset-${offset.value}`,
      ...argClasses
    ]
    return { gutter, gutterStyle, classes }
  }
}
</script>

<style lang="scss">
.grid-col{

 $class:grid-col-span-;
    @for $n from 0 through 24 {
     &.#{$class}#{$n}{
      width: ($n/24)*100%;
    }
  }
  $class:grid-col-offset-;
  @for $n from 0 through 24 {
    &.#{$class}#{$n}{
      margin-right: ($n/24)*100%;
    }
  }

  @media (min-width:576px)  {
    $class:grid-col-xm-span-;
    @for $n from 0 through 24 {
      &.#{$class}#{$n}{
        width: ($n/24)*100%;
      }
    }
    $class:grid-col-xm-offset-;
    @for $n from 0 through 24 {
      &.#{$class}#{$n}{
        margin-right: ($n/24)*100%;
      }
    }
  }

  @media (min-width:768px)  {
    $class:grid-col-md-span-;
    @for $n from 0 through 24 {
      &.#{$class}#{$n}{
        width: ($n/24)*100%;
      }
    }
    $class:grid-col-md-offset-;
    @for $n from 0 through 24 {
      &.#{$class}#{$n}{
        margin-right: ($n/24)*100%;
      }
    }
  }

  @media (min-width:992px)  {
    $class:grid-col-lg-span-;
    @for $n from 0 through 24 {
      &.#{$class}#{$n}{
        width: ($n/24)*100%;
      }
    }
    $class:grid-col-lg-offset-;
    @for $n from 0 through 24 {
      &.#{$class}#{$n}{
        margin-right: ($n/24)*100%;
      }
    }
  }

  @media (min-width:1200px)  {
    $class:grid-col-xl-span-;
    @for $n from 0 through 24 {
      &.#{$class}#{$n}{
        width: ($n/24)*100%;
      }
    }
    $class:grid-col-xl-offset-;
    @for $n from 0 through 24 {
      &.#{$class}#{$n}{
        margin-right: ($n/24)*100%;
      }
    }
  }

  @media (min-width:1600px){
    $class:grid-col-xxl-span-;
    @for $n from 0 through 24 {
      &.#{$class}#{$n}{
        width: ($n/24)*100%;
      }
    }
    $class:grid-col-xxl-offset-;
    @for $n from 0 through 24 {
      &.#{$class}#{$n}{
        margin-right: ($n/24)*100%;
      }
    }
  }
}
</style>

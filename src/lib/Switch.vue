<template>
  <div class="wheel-switch-container">
    <button :class="{checked:!checked}" @click="toggleChecked">
        <span>
        </span>
    </button>
  </div>
</template>

<script>

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Switch',
  props: {
    checked: {
      type: Boolean,
      default: false
    }
  },
  setup (props, content) {
    const toggleChecked = () => {
      content.emit('update:checked', !props.checked)
      content.emit('change', !props.checked)
    }
    return { toggleChecked }
  }
}
</script>

<style lang="scss">
  $h:22px;
  $h2:$h - 4px;
  .wheel-switch-container{
      .checked{
        background-color: #dcdfe6;
        >span{
          background-color: #ffffff;
          left: 2px;
        }
      }
      >button{
        width: $h*2;
        height: $h;
        border: none;
        border-radius:$h/2;
        position: relative;
        background-color: #409eff;
        outline: none;
        >span{
          position: absolute;
          left: calc(100% - #{$h2} - 2px);
          top: 2px;
          display:block;
          background-color: #ffffff;
          height: $h2;
          width: $h2;
          border-radius: $h2/2;
          transition: all 0.25s;
        }
      }
  }
</style>

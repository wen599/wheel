<template>
    <div class="wheel-input-container" :class="{error}">
      <input
        class="wheel-input"
        :value="value"
        :disabled="disabled"
        :readonly="readonly"
        @change="$emit('change',$event)"
        @input="oninput"
        @focus="$emit('focus',$event)"
        @blur="$emit('blur',$event)"
      >
      <template v-if="error">
        <i class="iconfont icon-cuowu"></i>
        <span class="wheel-input-error-text" >{{error}}</span>
      </template>
    </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean
    },
    readonly: {
      type: Boolean
    },
    error: {
      type: String
    }
  },
  setup (props, context) {
    const { emit } = context
    const oninput = (e) => {
      emit('update:value', e.target.value)
      emit('input', e)
    }
    return { oninput }
  }
}
</script>

<style lang="scss">
$height:32px;
$border-color:#999;
$border-color-hover:#666;
$border-radius:4px;
$font-size:12px;
$box-shadow-color:rgba(0,0,0,0.5);
$disabled-color: #ccc;
$error-color:#f1453d;
.wheel-input-container{
  font-size: $font-size;
  display: inline-flex;
  align-items: center;
  &.error{
      :not(:last-child){margin-right: 0.5em;}
      .wheel-input{
        border-color: $error-color;
      }
      span{
        color: $error-color;
      }
     .icon-cuowu{
       font-size: 14px;
       color: $error-color;
     }
  }
  .wheel-input{
    height: $height;
    border: 1px solid $border-color;
    border-radius:$border-radius ;
    padding: 0 8px;
    font-size: inherit;
    &:hover{
      border-color: $border-color-hover;
    }
    &:focus{
      outline: none;
      box-shadow: inset 0 1px 3px $box-shadow-color;
    }
    &[disabled],&[readonly]{
      color: $disabled-color;
      border-color: $disabled-color;
      cursor: not-allowed;
    }
  }
  .wheel-input-error-text{
    font-size: inherit;
  }
}
</style>

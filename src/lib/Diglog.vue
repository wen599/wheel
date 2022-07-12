<template>
  <Teleport to="body" v-if="visible">
    <div class="wheel-dialog-overlay" @click="closeOnClickOverlay" ></div>
    <div class="wheel-dialog-container">
      <div  class="wheel-dialog-close" @click="close" >X</div>
      <header>
        <slot name="title">标题区域</slot>
      </header>
      <main>
       <slot name="content">内容区域</slot>
      </main>
      <footer>
        <Button  @click="onClickCancel">取消</Button>
        <Button level="main" @click="affirm">确认</Button>
      </footer>
    </div>

  </Teleport>

</template>

<script>
import Button from '@/lib/Button'
export default {
  name: 'Diglog',
  components: { Button },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    overlay: {
      type: Boolean,
      default: true
    },
    ok: {
      type: Function
    },
    cancel: {
      type: Function
    }
  },
  setup (props, content) {
    const close = () => {
      content.emit('update:visible', false)
    }
    const closeOnClickOverlay = () => {
      if (props.overlay) close()
    }
    const affirm = () => {
      if (props.ok && props.ok() === true) return
      close()
    }
    const onClickCancel = () => {
      if (props.cancel && props.cancel() === true) return
      close()
    }
    return { close, closeOnClickOverlay, affirm, onClickCancel }
  }

}
</script>

<style lang="scss">
  .wheel-dialog-overlay{
    background-color: rgba(0,0,0,0.5);
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
  }

  .wheel-dialog-container{
    .wheel-dialog-close{
      position: absolute;
      width: 20px;
      top: 4px;
      right: 4px;
      text-align: center;
      background-color: #f0f0f0;
    }
    background-color: white;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    z-index: 11;
    min-width: 300px;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    >header{
      height: 42px;
      line-height: 42px;
      text-align: center;
      border-bottom: 1px solid #c8c8c8;
    }
    >main{
      flex: 1;
    }
    >footer{
      border-top: 1px solid #c8c8c8;
      height: 42px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
  }
</style>

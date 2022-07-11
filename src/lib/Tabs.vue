<template>
  <div class="titleContainer" ref="container" >
     <div
       :class="{selected:item===selected}"
       v-for="(item,index) in titles"
       :key="index"
       @click="changeTitle(item)"
       :ref="el => { if (el) divs[index] = el }"
     >{{item}}</div>
    <div class="wheel-indicator" ref="indicator"></div>
  </div>
  <template v-for="(item,index) in componentArray"   :key="index" >
    <component
      v-if="item.props.title===selected"
      :is="item">
    </component>
  </template>

</template>

<script>
import Tab from '@/lib/Tab'
import { onMounted, onUpdated, ref } from 'vue'
export default {
  name: 'Tabs',
  props: {
    selected: {
      type: String
    }
  },
  setup (props, context) {
    const componentArray = context.slots.default()
    const titles = []
    componentArray.forEach(item => {
      if (item.type !== Tab) {
        throw new Error('Tabs的子组件必须是Tab')
      }
      titles.push(item.props.title)
    })

    const changeTitle = (title) => {
      context.emit('update:selected', title)
    }

    // 激活时候下面的横线逻辑
    const divs = ref([])
    const indicator = ref(null)
    const container = ref(null)
    const xxx = () => {
      // 找出类名含有selected的div
      const result = divs.value.find((item) => {
        return item.classList.contains('selected')
      })
      // 设置下面横线的宽度为div的宽度
      const { width, left: left2 } = result.getBoundingClientRect()
      //
      const { left: left1 } = container.value.getBoundingClientRect()
      const left = left2 - left1
      indicator.value.style.width = width + 'px'
      indicator.value.style.left = left + 'px'
    }
    onMounted(xxx)
    onUpdated(xxx)

    return { componentArray, titles, changeTitle, divs, indicator, container }
  }
}
</script>

<style lang="scss">
.titleContainer{
  display: flex;
  border-bottom: 1px solid darkgray;
  position: relative;

  >div{
    cursor: pointer;
    margin:10px;
    &.selected{
      color: #409eff;
    }
  }

  .wheel-indicator{
    margin: 0;
    position: absolute;
    width: 100px;
    height: 2px;
    background-color: #409eff;
    left: 0;
    bottom: -2px;
    transition: all 0.25s;
  }
}
</style>

<template>
    <div class="button-page-container">
    <p>
      <Button theme="button">你好</Button>
      <Button theme="link"></Button>
      <Button theme="text"></Button>
    </p>

    <p>
      <Button  size="big">你好</Button>
      <Button  ></Button>
      <Button  size="min"></Button>
    </p>
      <p>
        <Button theme="link" size="big">你好</Button>
        <Button theme="link" ></Button>
        <Button theme="link" size="min"></Button>
      </p>
      <p>
        <Button theme="text" size="big">你好</Button>
        <Button theme="text" ></Button>
        <Button theme="text" size="min"></Button>
      </p>

      <p>
        <Button level="main" >你好</Button>
        <Button   ></Button>
        <Button level="danger" ></Button>
      </p>
      <p>
        <Button theme="link" level="main" >你好</Button>
        <Button  theme="link" ></Button>
        <Button theme="link" level="danger" ></Button>
      </p>
      <p>
        <Button theme="text" level="main" >你好</Button>
        <Button  theme="text" ></Button>
        <Button theme="text" level="danger" ></Button>
      </p>
      <p>
        <Button theme="button" disabled>你好</Button>
        <Button theme="link"  disabled></Button>
        <Button theme="text"  disabled></Button>
      </p>
      <p>
        <Button loading>加载中</Button>
        <Button>加载完成</Button>
      </p>
    </div>
</template>

<script>
import Button from '@/lib/Button'
export default {
  name: 'ButtonPage',
  components: { Button }
}
</script>

<style lang="scss">
  .button-page-container{
    background-color: #ff7fa5;
    min-height:100%;
    >Button{
      margin: 20px;
    }
  }
</style>

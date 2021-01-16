<template>
  <div>Button 示例</div>
  <h1>示例1</h1>
  <div>
    <Button theme="primary">普通</Button>
    <Button>普通</Button>
    <Button theme="link">普通</Button>
    <Button theme="text">普通</Button>
  </div>
  <h1>示例2</h1>
  <div>
    <Button theme="primary">普通</Button>
    <Button>普通</Button>
    <Button theme="link">普通</Button>
    <Button theme="text">普通</Button>
  </div>
  <br />
  <div>
    <Button theme="primary" size="big">大按钮</Button>
    <Button size="big">大按钮</Button>
    <Button theme="link" size="big">大按钮</Button>
    <Button theme="text" size="big">大按钮</Button>
  </div>
  <br />
  <div>
    <Button theme="primary" size="small">小按钮</Button>
    <Button size="small">小按钮</Button>
    <Button theme="link" size="small">小按钮</Button>
    <Button theme="text" size="small">小按钮</Button>
  </div>
  <br />
  <div>
    <Button theme="primary" loading>加载中</Button>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';

export default {
  name: 'ButtonDemo',
  components: {
    Button,
  },
};
</script>

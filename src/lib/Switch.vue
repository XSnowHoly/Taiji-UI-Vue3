<template>
  <button :class="{ checked: value }" @click="toggle">
    <span></span>
  </button>
</template>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button {
  height: $h;
  width: $h * 2.2;
  border: none;
  background: #fff;
  border-radius: $h/2;
  position: relative;

  &:focus {
    outline: none;
  }

  $radius: 22px;
  span {
    position: absolute;
    z-index: 10;
    top: 0px;
    left: 1px;
    height: $radius;
    width: $radius;
    box-shadow: 0px 1px 1px #333;
    background: #4e4e4e;
    border-radius: $radius / 2;
    transition: left 250ms;
  }

  &.checked {
    background: #363636;

    span {
      left: $h * 2.2 - $radius;
      background: #f5f5f5;
    }
  }
}
</style>

<script lang="ts">
import { ref } from 'vue'
export default {
  name: 'Switch',
  props: {
    value: Boolean,
  },
  setup(props, context) {
    const toggle = () => {
      console.log('点击了switch', !props.value)
      context.emit('update:value', !props.value)
    }

    return {
      toggle,
    }
  },
}
</script>

<template>
  <button class="taiji-button" :class="`taiji-theme-${theme}`">
    <slot />
  </button>
</template>

<script lang="ts">
export default {
  name: 'Button',
  props: {
    theme: {
      type: String,
      default: 'button',
    },
  },
}
</script>

<style lang="scss">
$h: 32px;
$border-color: #333;
$color: #fff;
$gray: #a8a8a8;
$radius: 4px;
$bg: #333;

.taiji-button {
  box-sizing: border-box;
  height: $h;
  line-height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: $bg;
  color: $color;
  border: 6px solid $border-color;
  box-shadow: 0 1px 0 fade-out(black, 0.95);

  & + & {
    margin-left: 8px;
  }

  &:hover,
  &:focus {
    border-color: lighten($bg, 20%);
    background: lighten($bg, 20%);
  }

  &:focus {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }
}
</style>

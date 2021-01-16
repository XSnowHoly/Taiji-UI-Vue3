<template>
  <button class="taiji-button" :class="classes">
    <span :class="{'taiji-button-loading': loading}"></span>
    <slot />
  </button>
</template>

<script lang="ts">
import { computed } from 'vue';

export default {
  name: 'Button',
  props: {
    theme: {
      type: String,
      default: 'button',
    },
    size: {
      type: String,
      default: 'normal',
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const { theme, size } = props;
    const classes = computed(() => {
      return {
        [`taiji-theme-${theme}`]: theme,
        [`taiji-theme-${size}`]: size,
      };
    });

    return {
      classes,
    };
  },
};
</script>

<style lang="scss">
$h: 32px;
$bigH: 48px;
$bigSize: 18px;
$smallSize: 14px;
$smallH: 28px;
$border-color: #333;
$normalTextColor: #333;
$linkTextColor: #3393ec;
$textColor: #333;
$color: #fff;
$borderPx: 4px;
$gray: #a8a8a8;
$radius: 4px;
$bg: #333;
$normalBg: #fff;

@keyframes rotateAnimation {
  100% {
    transform: rotate(360deg);
  }
}

.taiji-button {
  box-sizing: border-box;
  height: $h;
  font-size: 14px;
  line-height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: $normalBg;
  color: $normalTextColor;
  border: $borderPx solid $border-color;
  box-shadow: 0 1px 0 fade-out(black, 0.95);

  & + & {
    margin-left: 8px;
  }

  &:hover,
  &:focus {
    border-color: lighten($border-color, 20%);
    background: lighten($normalBg, 20%);
  }

  &:focus {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }

  &.taiji-theme-big {
    height: $bigH;
    font-size: $bigSize;
    padding: 0 18px;
  }

  &.taiji-theme-small {
    height: $smallH;
    font-size: $smallSize;
    padding: 0 10px;
  }

  &.taiji-theme-primary {
    background: $bg;
    color: $color;

    &:hover,
    &:focus {
      border-color: lighten($bg, 20%);
      background: lighten($bg, 20%);
    }
  }

  &.taiji-theme-link {
    background: transparent;
    border-color: transparent;
    box-shadow: none;
    color: $linkTextColor;

    &:hover,
    &:focus {
      color: lighten($linkTextColor, 10%);
    }
  }

  &.taiji-theme-text {
    background: transparent;
    border-color: transparent;
    box-shadow: none;
    color: $textColor;

    &:hover,
    &:focus {
      background: #c0c0c0;
    }
  }

  > .taiji-button-loading {
    display: block;
    margin-right: 6px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: transparent;
    border: 3px solid transparent;
    border-top: 3px solid #e2e2e2;
    border-left: 3px solid #e2e2e2;
    animation: rotateAnimation infinite linear 1.2s;
  }
}
</style>

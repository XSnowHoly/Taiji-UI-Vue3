<template>
  <div class="switch-wrap">
    <Switch v-model:value="checked" />
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import Switch from '../lib/Switch.vue'

export default {
  name: 'ButtonDemo',
  components: {
    Switch,
  },
  setup() {
    const checked = ref(false)
    return {
      checked,
    }
  },
}
</script>

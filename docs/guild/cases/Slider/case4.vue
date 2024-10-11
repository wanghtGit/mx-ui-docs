<template>
  <div class="slider-demo-block">
    <mx-slider v-model="value" show-input size="large" />
    <mx-slider v-model="value" show-input />
    <mx-slider v-model="value" show-input size="small" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(0)
</script>

<style scoped>
.slider-demo-block {
  max-width: 600px;
}

.ijep-slider {
  margin-top: 20px;
}

.ijep-slider:first-child {
  margin-top: 0;
}
</style>

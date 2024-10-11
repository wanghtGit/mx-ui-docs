<template>
  <div class="slider-demo-block">
    <mx-slider v-model="value" vertical height="200px" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(0)
</script>

<style scoped>
.slider-demo-block {
  max-width: 600px;
  display: flex;
  align-items: center;
}
.slider-demo-block .ijep-slider {
  margin-top: 0;
  margin-left: 12px;
}
</style>

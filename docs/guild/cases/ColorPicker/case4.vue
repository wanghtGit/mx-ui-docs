<template>
  <div class="demo-color-sizes">
    <mx-color-picker v-model="color" size="large" />
    <mx-color-picker v-model="color" />
    <mx-color-picker v-model="color" size="small" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const color = ref('409EFF')
</script>

<style>
.demo-color-sizes .ijep-color-picker:not(:last-child) {
  margin-right: 16px;
}
</style>
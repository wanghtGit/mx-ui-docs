<template>
  <mx-time-picker v-model="timeVal1" allow="W"></mx-time-picker>
  <div class="mb-10"></div>
  <mx-time-picker v-model="timeVal2" allow="W" arrow-control></mx-time-picker>
</template>

<script setup>
import { ref } from 'vue'

const timeVal1 = ref()
const timeVal2 = ref()
</script>
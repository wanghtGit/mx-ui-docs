<template>
  <mx-date-picker-range v-model="dateVal"></mx-date-picker-range>
</template>

<script setup>
import { ref } from 'vue'

const dateVal = ref()
</script>
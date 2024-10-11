<template>
  <mx-number v-model="numVal"></mx-number>
</template>

<script setup>
import { ref } from 'vue'

const numVal = ref(111222)
</script>
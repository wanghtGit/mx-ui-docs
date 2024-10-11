<template>
  <mx-interval v-model="dateVal" allow="W"></mx-interval>
</template>

<script setup>
import { ref } from 'vue'

const dateVal = ref()
</script>
<template>
  <mx-text-area v-model="textVal" allow="W" :row="4" maxLength="300"></mx-text-area>
</template>

<script setup>
import { ref } from 'vue'

const textVal = ref('0')
</script>
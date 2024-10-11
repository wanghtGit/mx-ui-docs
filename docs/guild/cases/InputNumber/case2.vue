<template>
  <mx-number v-model="numVal" :isCurrency="true"></mx-number>
</template>

<script setup>
import { ref } from 'vue'

const numVal = ref(2223333)
</script>
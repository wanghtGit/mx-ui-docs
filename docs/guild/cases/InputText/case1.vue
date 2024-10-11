<template>
  <mx-input v-model="inputVal" placeholder="请输入内容" maxLength="100"></mx-input>
</template>

<script setup>
import { ref } from 'vue'

const inputVal = ref('')
</script>
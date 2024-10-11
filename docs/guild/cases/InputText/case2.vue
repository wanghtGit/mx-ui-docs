<template>
  <mx-input v-model="inputVal" placeholder="请输入密码" showPassword></mx-input>
</template>

<script setup>
import { ref } from 'vue'

const inputVal = ref('1234')
</script>
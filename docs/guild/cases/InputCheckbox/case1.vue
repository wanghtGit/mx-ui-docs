<template>
  <mx-checkbox :data="checkList"></mx-checkbox>
</template>

<script setup>
import { ref } from 'vue'

const checkList = ref([
  { value: 'check01', label: '选项01' },
  { value: 'check02', label: '选项02' },
])
</script>
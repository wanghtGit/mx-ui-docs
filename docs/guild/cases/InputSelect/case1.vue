<template>
  <mx-select v-model="selectVal" :dict="selectList"></mx-select>
</template>

<script setup>
import { ref } from 'vue'

const selectVal = ref('02')
const selectList = ref([
  { key: '01', label: '选项1' },
  { key: '02', label: '选项2' },
  { key: '03', label: '选项3' },
  { key: '04', label: '选项4' }
])
</script>
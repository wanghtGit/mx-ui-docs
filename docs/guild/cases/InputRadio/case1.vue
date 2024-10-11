<template>
  <mx-radio v-model="radioVal" :dict="[{ key: '1', label: '是' }, { key: '0', label: '否' }]"></mx-radio>
</template>

<script setup>
import { ref } from 'vue'

const radioVal = ref('0')
</script>
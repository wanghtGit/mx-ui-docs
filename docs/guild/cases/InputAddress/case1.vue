<template>
  <mx-address :options="addOptions"></mx-address>
</template>

<script setup>
import { ref } from 'vue'

const addOptions = ref([
  { value: 'add01', label: '地址01' },
  {
    value: 'add02',
    label: '地址02',
    children: [
      { value: 'add0201', label: '地址02-01' },
      { value: 'add0202', label: '地址02-02' },
    ]
  },
])
</script>
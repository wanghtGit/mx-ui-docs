<template>
  <div>
    <mx-mul-cascader :options="addOptions"></mx-mul-cascader>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const addOptions = ref([
  { value: 'add01', label: '级联数据01' },
  {
    value: 'add02',
    label: '级联数据02',
    children: [
      { value: 'add0201', label: '级联数据02-01' },
      { value: 'add0202', label: '级联数据02-02' },
    ]
  },
])
</script>
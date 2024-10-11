<template>
  <div class="flex gap-2">
    <mx-tag class="mr-10" v-for="tag in tags" :key="tag.name" closable :type="tag.type">
      {{ tag.name }}
    </mx-tag>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const tags = ref([
  { name: 'Tag 1', type: 'primary' },
  { name: 'Tag 2', type: 'success' },
  { name: 'Tag 3', type: 'info' },
  { name: 'Tag 4', type: 'warning' },
  { name: 'Tag 5', type: 'danger' },
])
</script>

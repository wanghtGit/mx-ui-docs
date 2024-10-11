<template>
  <mx-tooltip :visible="visible">
    <template #content>
      <span>Content</span>
    </template>
    <mx-button @mouseenter="visible = true" @mouseleave="visible = false">
      Hover me
    </mx-button>
  </mx-tooltip>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)
</script>

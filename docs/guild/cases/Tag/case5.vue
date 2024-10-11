<template>
  <div class="mb-10">
    <span>Dark</span>
    <mx-tag
      class="ml-10"
      v-for="item in items"
      :key="item.label"
      :type="item.type"
      effect="dark"
    >
      {{ item.label }}
    </mx-tag>
  </div>
  <div class="mb-10">
    <span>Light</span>
    <mx-tag
      class="ml-10"
      v-for="item in items"
      :key="item.label"
      :type="item.type"
      effect="light"
    >
      {{ item.label }}
    </mx-tag>
  </div>
  <div class="mb-10">
    <span>Plain</span>
    <mx-tag
      class="ml-10"
      v-for="item in items"
      :key="item.label"
      :type="item.type"
      effect="plain"
    >
      {{ item.label }}
    </mx-tag>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const items = ref([
  { type: 'primary', label: 'Tag 1' },
  { type: 'success', label: 'Tag 2' },
  { type: 'info', label: 'Tag 3' },
  { type: 'warning', label: 'Tag 4' },
  { type: 'danger', label: 'Tag 5' },
])
</script>

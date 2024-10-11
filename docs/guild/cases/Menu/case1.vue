<template>
  <div>
    <mx-menu
      :default-active="activeIndex"
      class="ijep-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <mx-menu-item index="1">Processing Center</mx-menu-item>
      <mx-menu-item index="3" disabled>Info</mx-menu-item>
      <mx-menu-item index="4">Orders</mx-menu-item>
    </mx-menu>
    <div class="h-6" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const activeIndex2 = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
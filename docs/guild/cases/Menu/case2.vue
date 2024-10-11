<template>
  <mx-menu
    :default-active="activeIndex"
    class="ijep-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <mx-menu-item index="0">
      image
    </mx-menu-item>
    <mx-menu-item index="1">Processing Center</mx-menu-item>
    <mx-submenu index="2">
      <template #title>Workspace</template>
      <mx-menu-item index="2-1">item one</mx-menu-item>
      <mx-menu-item index="2-2">item two</mx-menu-item>
      <mx-menu-item index="2-3">item three</mx-menu-item>
      <mx-submenu index="2-4">
        <template #title>item four</template>
        <mx-menu-item index="2-4-1">item one</mx-menu-item>
        <mx-menu-item index="2-4-2">item two</mx-menu-item>
        <mx-menu-item index="2-4-3">item three</mx-menu-item>
      </mx-submenu>
    </mx-submenu>
  </mx-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style>
.ijep-menu--horizontal > .ijep-menu-item:nth-child(1) {
  margin-right: auto;
}
</style>
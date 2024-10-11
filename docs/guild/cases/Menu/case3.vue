<template>
  <mx-row class="tac">
    <mx-col :span="12">
      <h5 class="mb-2">Default colors</h5>
      <mx-menu
        default-active="2"
        class="ijep-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <mx-submenu index="1">
          <template #title>
            <mx-icon type="Location"></mx-icon>
            <span>Navigator One</span>
          </template>
          <mx-menu-item-group title="Group One">
            <mx-menu-item index="1-1">item one</mx-menu-item>
            <mx-menu-item index="1-2">item two</mx-menu-item>
          </mx-menu-item-group>
          <mx-menu-item-group title="Group Two">
            <mx-menu-item index="1-3">item three</mx-menu-item>
          </mx-menu-item-group>
          <mx-submenu index="1-4">
            <template #title>item four</template>
            <mx-menu-item index="1-4-1">item one</mx-menu-item>
          </mx-submenu>
        </mx-submenu>
        <mx-menu-item index="2">
          <mx-icon type="Menu"></mx-icon>
          <span>Navigator Two</span>
        </mx-menu-item>
        <mx-menu-item index="3" disabled>
          <mx-icon tpe="Document"></mx-icon>
          <span>Navigator Three</span>
        </mx-menu-item>
        <mx-menu-item index="4">
          <mx-icon type="Setting"></mx-icon>
          <span>Navigator Four</span>
        </mx-menu-item>
      </mx-menu>
    </mx-col>
    <mx-col :span="12">
      <h5 class="mb-2">Custom colors</h5>
      <mx-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="mx-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
      >
        <mx-submenu index="1">
          <template #title>
            <mx-icon type="Location"></mx-icon>
            <span>Navigator One</span>
          </template>
          <mx-menu-item-group title="Group One">
            <mx-menu-item index="1-1">item one</mx-menu-item>
            <mx-menu-item index="1-2">item two</mx-menu-item>
          </mx-menu-item-group>
          <mx-menu-item-group title="Group Two">
            <mx-menu-item index="1-3">item three</mx-menu-item>
          </mx-menu-item-group>
          <mx-submenu index="1-4">
            <template #title>item four</template>
            <mx-menu-item index="1-4-1">item one</mx-menu-item>
          </mx-submenu>
        </mx-submenu>
        <mx-menu-item index="2">
          <mx-icon type="Menu"></mx-icon>
          <span>Navigator Two</span>
        </mx-menu-item>
        <mx-menu-item index="3" disabled>
          <mx-icon tpe="Document"></mx-icon>
          <span>Navigator Three</span>
        </mx-menu-item>
        <mx-menu-item index="4">
          <mx-icon type="Setting"></mx-icon>
          <span>Navigator Four</span>
        </mx-menu-item>
      </mx-menu>
    </mx-col>
  </mx-row>
</template>

<script lang="ts" setup>
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
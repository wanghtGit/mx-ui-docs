<template>
  <mx-dropdown>
    <span class="ijep-dropdown-link">
      Dropdown List
      <mx-icon type="ArrowDown"></mx-icon>
    </span>
    <template #dropdown>
      <mx-dropdown-menu>
        <mx-dropdown-item>Action 1</mx-dropdown-item>
        <mx-dropdown-item>Action 2</mx-dropdown-item>
        <mx-dropdown-item>Action 3</mx-dropdown-item>
        <mx-dropdown-item disabled>Action 4</mx-dropdown-item>
        <mx-dropdown-item divided>Action 5</mx-dropdown-item>
      </mx-dropdown-menu>
    </template>
  </mx-dropdown>
</template>

<script lang="ts" setup>

</script>
<style scoped>
.example-showcase .ijep-dropdown-link {
  cursor: pointer;
  color: #409EFF;
  display: flex;
  align-items: center;
}
</style>
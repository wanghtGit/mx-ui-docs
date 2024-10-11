<template>
  <div class="flex flex-wrap items-center">
    <mx-dropdown>
      <mx-button type="primary">
        Dropdown List<mx-icon type="ArrowDown"></mx-icon>
      </mx-button>
      <template #dropdown>
        <mx-dropdown-menu>
          <mx-dropdown-item>Action 1</mx-dropdown-item>
          <mx-dropdown-item>Action 2</mx-dropdown-item>
          <mx-dropdown-item>Action 3</mx-dropdown-item>
          <mx-dropdown-item>Action 4</mx-dropdown-item>
          <mx-dropdown-item>Action 5</mx-dropdown-item>
        </mx-dropdown-menu>
      </template>
    </mx-dropdown>
    <mx-dropdown class="ml-10" split-button type="primary" @click="handleClick">
      Dropdown List
      <template #dropdown>
        <mx-dropdown-menu>
          <mx-dropdown-item>Action 1</mx-dropdown-item>
          <mx-dropdown-item>Action 2</mx-dropdown-item>
          <mx-dropdown-item>Action 3</mx-dropdown-item>
          <mx-dropdown-item>Action 4</mx-dropdown-item>
          <mx-dropdown-item>Action 5</mx-dropdown-item>
        </mx-dropdown-menu>
      </template>
    </mx-dropdown>
  </div>
</template>

<script lang="ts" setup>

const handleClick = () => {
  // eslint-disable-next-line no-alert
  alert('button click')
}
</script>
<style scoped>
.example-showcase .ijep-dropdown-link {
  cursor: pointer;
  color: #409EFF;
  display: flex;
  align-items: center;
}
</style>
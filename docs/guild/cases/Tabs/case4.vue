<template>
  <div style="width: 250px; margin-bottom: 20px;">
    <mx-select v-model="tabPosition" :dict="dictList"></mx-select>
  </div>

  <mx-tabs :tab-position="tabPosition" style="height: 200px" class="demo-tabs">
    <mx-tab-pane label="User">User</mx-tab-pane>
    <mx-tab-pane label="Config">Config</mx-tab-pane>
    <mx-tab-pane label="Role">Role</mx-tab-pane>
    <mx-tab-pane label="Task">Task</mx-tab-pane>
  </mx-tabs>
</template>

<script setup>
import { ref } from 'vue'

const tabPosition = ref('left')
const dictList = ref([
  { key: 'top', label: 'top' },
  { key: 'right', label: 'right' },
  { key: 'bottom', label: 'bottom' },
  { key: 'left', label: 'left' }
])
</script>

<style>
.demo-tabs > .ijep-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.ijep-tabs--right .ijep-tabs__content,
.ijep-tabs--left .ijep-tabs__content {
  height: 100%;
}
</style>

<template>
  <mx-tabs type="border-card" class="demo-tabs">
    <mx-tab-pane label="Route" icon="Calendar" >Route</mx-tab-pane>
    <mx-tab-pane label="Config">Config</mx-tab-pane>
    <mx-tab-pane label="Role">Role</mx-tab-pane>
    <mx-tab-pane label="Task">Task</mx-tab-pane>
  </mx-tabs>
</template>

<script setup>

</script>

<style>
.demo-tabs > .ijep-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.demo-tabs .custom-tabs-label .ijep-icon {
  vertical-align: middle;
}
.demo-tabs .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}
</style>

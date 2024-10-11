<template>
  <mx-tabs
    v-model="activeName"
    type="card"
    class="demo-tabs"
    @tab-click="handleClick"
  >
    <mx-tab-pane label="User" name="first">User</mx-tab-pane>
    <mx-tab-pane label="Config" name="second">Config</mx-tab-pane>
    <mx-tab-pane label="Role" name="third">Role</mx-tab-pane>
    <mx-tab-pane label="Task" name="fourth">Task</mx-tab-pane>
  </mx-tabs>
</template>

<script setup>
import { ref } from 'vue'

const activeName = ref('first')

const handleClick = (tab, event) => {
  console.log(tab, event)
}
</script>

<style>
.demo-tabs > .ijep-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>

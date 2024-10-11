<template>
  <div style="width: 250px; margin-bottom: 20px;">
    <mx-select v-model="tabPosition" :dict="dictList"></mx-select>
  </div>

  <mx-jsx-tabs :tabPosition="tabPosition" :data="tabsList"></mx-jsx-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const tabPosition = ref('top')
const dictList = ref([
  { key: 'top', label: 'top' },
  { key: 'right', label: 'right' },
  { key: 'bottom', label: 'bottom' },
  { key: 'left', label: 'left' }
])

const tabsList = [
  { icon: 'Calendar', label: 'Route', content: '路由' },
  { icon: 'Search', label: 'Config', content: '配置' },
  { icon: '', label: 'Role', content: '角色' },
  { icon: '', label: 'Task', content: '任务' }
]

</script>

<style scoped>

</style>
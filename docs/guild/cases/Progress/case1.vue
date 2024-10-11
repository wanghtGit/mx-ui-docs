<template>
  <div class="demo-progress">
    <mx-progress :percentage="50" />
    <mx-progress :percentage="100" :format="format" />
    <mx-progress :percentage="100" status="success" />
    <mx-progress :percentage="100" status="warning" />
    <mx-progress :percentage="50" status="exception" />
  </div>
</template>

<script lang="ts" setup>
const format = (perVal) => (perVal === 100 ? 'Full' : `${perVal}%`)
</script>

<style scoped>
.demo-progress .ijep-progress--line {
  margin-bottom: 15px;
  max-width: 600px;
}
</style>
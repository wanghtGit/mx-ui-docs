<template>
  <div class="demo-progress">
    <mx-progress :percentage="50" :indeterminate="true" />
    <mx-progress :percentage="100" :format="format" :indeterminate="true" />
    <mx-progress
      :percentage="100"
      status="success"
      :indeterminate="true"
      :duration="5"
    />
    <mx-progress
      :percentage="100"
      status="warning"
      :indeterminate="true"
      :duration="1"
    />
    <mx-progress :percentage="50" status="exception" :indeterminate="true" />
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
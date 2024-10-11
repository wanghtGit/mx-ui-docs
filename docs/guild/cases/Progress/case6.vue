<template>
  <div class="demo-progress">
    <mx-progress :percentage="50">
      <mx-button text>Content</mx-button>
    </mx-progress>
    <mx-progress
      :text-inside="true"
      :stroke-width="20"
      :percentage="50"
      status="exception"
    >
      <span>Content</span>
    </mx-progress>
    <mx-progress type="circle" :percentage="100" status="success">
      <mx-button type="success" icon="Check" circle />
    </mx-progress>
    <mx-progress type="dashboard" :percentage="80">
      <template #default="scope">
        <span class="percentage-value">{{ scope?.percentage }}%</span>
        <span class="percentage-label">Progressing</span>
      </template>
    </mx-progress>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.percentage-value {
  display: block;
  margin-top: 10px;
  font-size: 28px;
}
.percentage-label {
  display: block;
  margin-top: 10px;
  font-size: 12px;
}
.demo-progress .ijep-progress--line {
  margin-bottom: 15px;
  max-width: 600px;
}
.demo-progress .ijep-progress--circle {
  margin-right: 15px;
}
</style>
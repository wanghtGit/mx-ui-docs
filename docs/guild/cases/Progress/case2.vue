<template>
  <div class="demo-progress">
    <mx-progress :text-inside="true" :stroke-width="26" :percentage="70" />
    <mx-progress
      :text-inside="true"
      :stroke-width="24"
      :percentage="100"
      status="success"
    />
    <mx-progress
      :text-inside="true"
      :stroke-width="22"
      :percentage="80"
      status="warning"
    />
    <mx-progress
      :text-inside="true"
      :stroke-width="20"
      :percentage="50"
      status="exception"
    />
  </div>
</template>

<style scoped>
.demo-progress .ijep-progress--line {
  margin-bottom: 15px;
  max-width: 600px;
}
</style>
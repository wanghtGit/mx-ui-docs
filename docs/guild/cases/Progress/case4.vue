<template>
  <div class="demo-progress">
    <mx-progress type="circle" :percentage="0" />
    <mx-progress type="circle" :percentage="25" />
    <mx-progress type="circle" :percentage="100" status="success" />
    <mx-progress type="circle" :percentage="70" status="warning" />
    <mx-progress type="circle" :percentage="50" status="exception" />
  </div>
</template>

<style scoped>
.demo-progress .ijep-progress--circle {
  margin-right: 15px;
}
</style>
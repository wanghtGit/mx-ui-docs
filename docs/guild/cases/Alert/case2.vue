<template>
  <div style="max-width: 600px">
    <mx-alert title="Success alert" type="success" show-icon />
    <mx-alert title="Info alert" type="info" show-icon />
    <mx-alert title="Warning alert" type="warning" show-icon />
    <mx-alert title="Error alert" type="error" show-icon />
  </div>
</template>

<style scoped>
.ijep-alert {
  margin: 20px 0 0;
}
.ijep-alert:first-child {
  margin: 0;
}
</style>
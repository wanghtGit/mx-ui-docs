<template>
  <mx-row>
    <mx-col :span="24"><div class="grid-content ep-bg-purple-dark" /></mx-col>
  </mx-row>
  <mx-row>
    <mx-col :span="12"><div class="grid-content ep-bg-purple" /></mx-col>
    <mx-col :span="12"><div class="grid-content ep-bg-purple-light" /></mx-col>
  </mx-row>
  <mx-row>
    <mx-col :span="8"><div class="grid-content ep-bg-purple" /></mx-col>
    <mx-col :span="8"><div class="grid-content ep-bg-purple-light" /></mx-col>
    <mx-col :span="8"><div class="grid-content ep-bg-purple" /></mx-col>
  </mx-row>
  <mx-row>
    <mx-col :span="6"><div class="grid-content ep-bg-purple" /></mx-col>
    <mx-col :span="6"><div class="grid-content ep-bg-purple-light" /></mx-col>
    <mx-col :span="6"><div class="grid-content ep-bg-purple" /></mx-col>
    <mx-col :span="6"><div class="grid-content ep-bg-purple-light" /></mx-col>
  </mx-row>
  <mx-row>
    <mx-col :span="4"><div class="grid-content ep-bg-purple" /></mx-col>
    <mx-col :span="4"><div class="grid-content ep-bg-purple-light" /></mx-col>
    <mx-col :span="4"><div class="grid-content ep-bg-purple" /></mx-col>
    <mx-col :span="4"><div class="grid-content ep-bg-purple-light" /></mx-col>
    <mx-col :span="4"><div class="grid-content ep-bg-purple" /></mx-col>
    <mx-col :span="4"><div class="grid-content ep-bg-purple-light" /></mx-col>
  </mx-row>
</template>

<style>
.ijep-row {
  margin-bottom: 20px;
}
.ijep-row:last-child {
  margin-bottom: 0;
}
.ijep-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
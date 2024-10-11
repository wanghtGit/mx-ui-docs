<template>
  <mx-row class="row-bg">
    <mx-col :span="6"><div class="grid-content ep-bg-purple" /></mx-col>
    <mx-col :span="6"><div class="grid-content ep-bg-purple-light" /></mx-col>
    <mx-col :span="6"><div class="grid-content ep-bg-purple" /></mx-col>
  </mx-row>
  <mx-row class="row-bg" justify="center">
    <mx-col :span="6"><div class="grid-content ep-bg-purple" /></mx-col>
    <mx-col :span="6"><div class="grid-content ep-bg-purple-light" /></mx-col>
    <mx-col :span="6"><div class="grid-content ep-bg-purple" /></mx-col>
  </mx-row>
  <mx-row class="row-bg" justify="end">
    <mx-col :span="6"><div class="grid-content ep-bg-purple" /></mx-col>
    <mx-col :span="6"><div class="grid-content ep-bg-purple-light" /></mx-col>
    <mx-col :span="6"><div class="grid-content ep-bg-purple" /></mx-col>
  </mx-row>
  <mx-row class="row-bg" justify="space-between">
    <mx-col :span="6"><div class="grid-content ep-bg-purple" /></mx-col>
    <mx-col :span="6"><div class="grid-content ep-bg-purple-light" /></mx-col>
    <mx-col :span="6"><div class="grid-content ep-bg-purple" /></mx-col>
  </mx-row>
  <mx-row class="row-bg" justify="space-around">
    <mx-col :span="6"><div class="grid-content ep-bg-purple" /></mx-col>
    <mx-col :span="6"><div class="grid-content ep-bg-purple-light" /></mx-col>
    <mx-col :span="6"><div class="grid-content ep-bg-purple" /></mx-col>
  </mx-row>
  <mx-row class="row-bg" justify="space-evenly">
    <mx-col :span="6"><div class="grid-content ep-bg-purple" /></mx-col>
    <mx-col :span="6"><div class="grid-content ep-bg-purple-light" /></mx-col>
    <mx-col :span="6"><div class="grid-content ep-bg-purple" /></mx-col>
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
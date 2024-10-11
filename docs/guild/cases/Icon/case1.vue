<template>
  <div class="icon-box">
    <div class="icon-Item">
      <mx-icon type="Plus" :size="23" />
      <div class="icon-type">Plus</div>
    </div>
    <div class="icon-Item">
      <mx-icon type="Minus" :size="23" />
      <div class="icon-type">Minus</div>
    </div>
    <div class="icon-Item">
      <mx-icon type="CirclePlus" :size="23" />
      <div class="icon-type">CirclePlus</div>
    </div>
    <div class="icon-Item">
      <mx-icon type="Search" :size="23" />
      <div class="icon-type">Search</div>
    </div>
    <div class="icon-Item">
      <mx-icon type="Female" :size="23" />
      <div class="icon-type">Female</div>
    </div>
    <div class="icon-Item">
      <mx-icon type="Male" :size="23" />
      <div class="icon-type">Male</div>
    </div>
    <div class="icon-Item">
      <mx-icon type="Aim" :size="23" />
      <div class="icon-type">Aim</div>
    </div>
    <div class="icon-Item">
      <mx-icon type="House" :size="23" />
      <div class="icon-type">House</div>
    </div>
    <div class="icon-Item">
      <mx-icon type="FullScreen" :size="23" />
      <div class="icon-type">FullScreen</div>
    </div>
    <div class="icon-Item">
      <mx-icon type="Loading" :size="23" />
      <div class="icon-type">Loading</div>
    </div>
    <div class="icon-Item">
      <mx-icon type="Link" :size="23" />
      <div class="icon-type">Link</div>
    </div>
    <span>......</span>
  </div>
</template>

<style lang="less" scoped>
.icon-box {
  display: flex;
  flex-wrap: wrap;
}
.icon-Item {
  display: inline-block;
  width: 90px;
  height: 90px;
  margin-right: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #cccccc;
  border-radius: 5px;

  .icon-type {
    margin-top: 5px;
    font-size: 13px;
  }
}
</style>
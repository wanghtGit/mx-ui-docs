<template>
  <div class="cover-box">
    <div class="cover-item">
      <div>带白色背景</div>
      <mx-bg-cover :useBg="true">
        <div class="cover-main"></div>
      </mx-bg-cover>
    </div>

    <div class="cover-item">
      <div>不带背景色</div>
      <mx-bg-cover :useBg="false">
        <div class="cover-main"></div>
      </mx-bg-cover>
    </div>
  </div>
</template>

<style scoped>
.cover-box {
  display: flex;
}

.cover-item {
  width: 200px;
  height: 200px;
  background: #cccccc;
  padding: 20px;
  margin-right: 20px;
}

.fisok-com-bgcover {
  border: 1px solid #3a47bb;
  width: 150px;
  height: 150px;
}

.cover-main {
  width: 100px;
  height: 100px;
  background: #489bb4;
}
</style>
<template>
  <div class="alignment-container">
    <mx-space>
      string
      <mx-button> button </mx-button>
      <mx-card>
        <template #header> header </template>
        body
      </mx-card>
    </mx-space>
  </div>
  <div class="alignment-container">
    <mx-space alignment="flex-start">
      string
      <mx-button> button </mx-button>
      <mx-card>
        <template #header> header </template>
        body
      </mx-card>
    </mx-space>
  </div>
  <div class="alignment-container">
    <mx-space alignment="flex-end">
      string
      <mx-button> button </mx-button>
      <mx-card>
        <template #header> header </template>
        body
      </mx-card>
    </mx-space>
  </div>
</template>

<style>
.alignment-container {
  width: 240px;
  margin-bottom: 20px;
  padding: 8px;
  border: 1px solid #dcdfe6;
}
</style>

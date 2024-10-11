<template>
  <mx-button plain @click="visible = true">
    Open Dialog with customized header
  </mx-button>

  <mx-dialog v-model="visible" :show-close="false" width="500px">
    <template #header="{ close, titleId, titleClass }">
      <div class="my-header">
        <h4 :id="titleId" :class="titleClass">This is a custom header!</h4>
        <mx-button type="danger" @click="close">
          <mx-icon type="CircleCloseFilled"></mx-icon>
          Close
        </mx-button>
      </div>
    </template>
    This is dialog content.
  </mx-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const visible = ref(false)
</script>

<style scoped>
.my-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;
}
</style>
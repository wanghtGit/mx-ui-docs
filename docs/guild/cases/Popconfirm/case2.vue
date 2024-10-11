<template>
  <mx-popconfirm
    width="220"
    icon-color="#626AEF"
    title="Are you sure to delete this?"
    @cancel="onCancel"
  >
    <template #reference>
      <mx-button>Delete</mx-button>
    </template>
    <template #actions="{ confirm, cancel }">
      <mx-button size="small" @click="cancel">No!</mx-button>
      <mx-button
        type="danger"
        size="small"
        :disabled="!clicked"
        @click="confirm"
      >
        Yes?
      </mx-button>
    </template>
  </mx-popconfirm>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const clicked = ref(false)
function onCancel() {
  clicked.value = true
}
</script>
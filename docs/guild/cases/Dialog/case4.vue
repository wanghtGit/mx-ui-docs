<template>
  <mx-button plain @click="outerVisible = true">
    Open the outer Dialog
  </mx-button>

  <mx-dialog v-model="outerVisible" title="Outer Dialog" width="800px">
    <span>This is the outer Dialog</span>
    <mx-dialog
      v-model="innerVisible"
      width="500px"
      title="Inner Dialog"
      append-to-body
    >
      <span>This is the inner Dialog</span>
    </mx-dialog>
    <template #footer>
      <div class="dialog-footer">
        <mx-button @click="outerVisible = false">Cancel</mx-button>
        <mx-button type="primary" @click="innerVisible = true">
          Open the inner Dialog
        </mx-button>
      </div>
    </template>
  </mx-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const outerVisible = ref(false)
const innerVisible = ref(false)
</script>
<template>
  <mx-button plain @click="dialogVisible = true">
    Click to open the Dialog
  </mx-button>

  <mx-dialog
    v-model="dialogVisible"
    title="Tips"
    width="500px"
    :before-close="handleClose"
  >
    <span>This is a message</span>
    <template #footer>
      <div class="dialog-footer">
        <mx-button @click="dialogVisible = false">Cancel</mx-button>
        <mx-button type="primary" @click="dialogVisible = false">
          Confirm
        </mx-button>
      </div>
    </template>
  </mx-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
// import { MxMsgBox } from '@wxct/mx-ui'
import * as MxUI from '@wxct/mx-ui'

const { MxMsgBox } = MxUI

const dialogVisible = ref(false)

const handleClose = (done: () => void) => {
  MxMsgBox.confirm('Are you sure to close this dialog?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}
</script>
<template>
  <mx-button plain @click="open">Click to open the Message Box</mx-button>
</template>

<script lang="ts" setup>
// import { MxMessage, MxMsgBox } from '@wxct/mx-ui'
import * as MxUI from '@wxct/mx-ui'

const { MxMessage, MxMsgBox } = MxUI

const open = () => {
  MxMsgBox.confirm(
    'proxy will permanently delete the file. Continue?',
    'Warning',
    {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning',
    }
  )
    .then(() => {
      MxMessage({
        type: 'success',
        message: 'Delete completed',
      })
    })
    .catch(() => {
      MxMessage({
        type: 'info',
        message: 'Delete canceled',
      })
    })
}
</script>
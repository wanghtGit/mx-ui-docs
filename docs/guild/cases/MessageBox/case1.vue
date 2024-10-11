<template>
  <mx-button plain @click="open">Click to open the Message Box</mx-button>
</template>

<script lang="ts" setup>
// import { MxMessage, MxMsgBox } from '@wxct/mx-ui'
import * as MxUI from '@wxct/mx-ui'

const { MxMessage, MxMsgBox } = MxUI

const open = () => {
  MxMsgBox.alert('This is a message', 'Title', {
    // if you want to disable its autofocus
    // autofocus: false,
    confirmButtonText: 'OK',
    callback: (action) => {
      MxMessage({
        type: 'info',
        message: `action: ${action}`,
      })
    },
  })
}
</script>
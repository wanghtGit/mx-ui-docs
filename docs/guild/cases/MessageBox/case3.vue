<template>
  <mx-button plain @click="open">Click to open Message Box</mx-button>
</template>

<script lang="ts" setup>
// import { MxMessage, MxMsgBox } from '@wxct/mx-ui'
import * as MxUI from '@wxct/mx-ui'

const { MxMessage, MxMsgBox } = MxUI

const open = () => {
  MxMsgBox.prompt('Please input your e-mail', 'Tip', {
    confirmButtonText: 'OK',
    cancelButtonText: 'Cancel',
    inputPattern:
      /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
    inputErrorMessage: 'Invalid Email',
  })
    .then(({ value }) => {
      MxMessage({
        type: 'success',
        message: `Your email is:${value}`,
      })
    })
    .catch(() => {
      MxMessage({
        type: 'info',
        message: 'Input canceled',
      })
    })
}
</script>
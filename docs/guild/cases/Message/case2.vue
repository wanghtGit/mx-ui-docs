<template>
  <mx-button :plain="true" @click="open2">Success</mx-button>
  <mx-button :plain="true" @click="open3">Warning</mx-button>
  <mx-button :plain="true" @click="open1">Message</mx-button>
  <mx-button :plain="true" @click="open4">Error</mx-button>
</template>

<script lang="ts" setup>
// import { MxMessage } from '@wxct/mx-ui'
import * as MxUI from '@wxct/mx-ui'

const { MxMessage } = MxUI

const open1 = () => {
  MxMessage('This is a message.')
}
const open2 = () => {
  MxMessage({
    message: 'Congrats, this is a success message.',
    type: 'success',
  })
}
const open3 = () => {
  MxMessage({
    message: 'Warning, this is a warning message.',
    type: 'warning',
  })
}
const open4 = () => {
  MxMessage.error('Oops, this is a error message.')
}
</script>
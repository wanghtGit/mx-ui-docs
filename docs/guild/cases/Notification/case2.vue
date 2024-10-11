<template>
  <mx-button plain @click="open1"> Success </mx-button>
  <mx-button plain @click="open2"> Warning </mx-button>
  <mx-button plain @click="open3"> Info </mx-button>
  <mx-button plain @click="open4"> Error </mx-button>
</template>

<script lang="ts" setup>
// import { MxNotify } from '@wxct/mx-ui'
import * as MxUI from '@wxct/mx-ui'

const { MxNotify } = MxUI

const open1 = () => {
  MxNotify({
    title: 'Success',
    message: 'This is a success message',
    type: 'success',
  })
}

const open2 = () => {
  MxNotify({
    title: 'Warning',
    message: 'This is a warning message',
    type: 'warning',
  })
}

const open3 = () => {
  MxNotify({
    title: 'Info',
    message: 'This is an info message',
    type: 'info',
  })
}

const open4 = () => {
  MxNotify({
    title: 'Error',
    message: 'This is an error message',
    type: 'error',
  })
}
</script>
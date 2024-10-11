<template>
  <mx-button plain @click="open"> Notification with offset </mx-button>
</template>

<script lang="ts" setup>
// import { MxNotify } from '@wxct/mx-ui'
import * as MxUI from '@wxct/mx-ui'

const { MxNotify } = MxUI

const open = () => {
  MxNotify.success({
    title: 'Success',
    message: 'This is a success message',
    offset: 100,
  })
}
</script>
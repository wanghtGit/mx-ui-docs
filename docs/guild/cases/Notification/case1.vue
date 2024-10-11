<template>
  <mx-button plain @click="open1"> Closes automatically </mx-button>
  <mx-button plain @click="open2"> Won't close automatically </mx-button>
</template>

<script lang="ts" setup>
import { h } from 'vue'
// import { MxNotify } from '@wxct/mx-ui'
import * as MxUI from '@wxct/mx-ui'

const { MxNotify } = MxUI

const open1 = () => {
  MxNotify({
    title: 'Title',
    message: h('i', { style: 'color: teal' }, 'This is a reminder'),
  })
}

const open2 = () => {
  MxNotify({
    title: 'Prompt',
    message: 'This is a message that does not automatically close',
    duration: 0,
  })
}
</script>
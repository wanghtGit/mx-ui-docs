<template>
  <mx-button plain @click="open1"> Top Right </mx-button>
  <mx-button plain @click="open2"> Bottom Right </mx-button>
  <mx-button plain @click="open3"> Bottom Left </mx-button>
  <mx-button plain @click="open4"> Top Left </mx-button>
</template>

<script lang="ts" setup>
// import { MxNotify } from '@wxct/mx-ui'
import * as MxUI from '@wxct/mx-ui'

const { MxNotify } = MxUI

const open1 = () => {
  MxNotify({
    title: 'Custom Position',
    message: "I'm at the top right corner",
  })
}

const open2 = () => {
  MxNotify({
    title: 'Custom Position',
    message: "I'm at the bottom right corner",
    position: 'bottom-right',
  })
}

const open3 = () => {
  MxNotify({
    title: 'Custom Position',
    message: "I'm at the bottom left corner",
    position: 'bottom-left',
  })
}

const open4 = () => {
  MxNotify({
    title: 'Custom Position',
    message: "I'm at the top left corner",
    position: 'top-left',
  })
}
</script>
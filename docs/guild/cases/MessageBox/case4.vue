<template>
  <mx-button plain @click="open">Common VNode</mx-button>
</template>

<script lang="ts" setup>
import { h, ref } from 'vue'
// import { MxMsgBox } from '@wxct/mx-ui'
import * as MxUI from '@wxct/mx-ui'

const { MxMsgBox } = MxUI

const open = () => {
  MxMsgBox({
    title: 'Message',
    message: h('p', null, [
      h('span', null, 'Message can be '),
      h('i', { style: 'color: teal' }, 'VNode'),
    ]),
  })
}
</script>
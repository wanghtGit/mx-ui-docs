<template>
  <mx-button :plain="true" @click="open">Show message</mx-button>
  <mx-button :plain="true" @click="openVn">VNode</mx-button>
</template>

<script lang="ts" setup>
import { h } from 'vue'
// import { MxMessage } from '@wxct/mx-ui'
import * as MxUI from '@wxct/mx-ui'

const { MxMessage } = MxUI

const open = () => {
  MxMessage('This is a message.')
}

const openVn = () => {
  MxMessage({
    message: h('p', { style: 'line-height: 1; font-size: 14px' }, [
      h('span', null, 'Message can be '),
      h('i', { style: 'color: teal' }, 'VNode'),
    ]),
  })
}
</script>
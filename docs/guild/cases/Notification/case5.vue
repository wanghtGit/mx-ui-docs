<template>
  <mx-button plain @click="open"> Use HTML String </mx-button>
</template>

<script lang="ts" setup>
// import { MxNotify } from '@wxct/mx-ui'
import * as MxUI from '@wxct/mx-ui'

const { MxNotify } = MxUI

const open = () => {
  MxNotify({
    title: 'HTML String',
    dangerouslyUseHTMLString: true,
    message: '<strong>This is <i>HTML</i> string</strong>',
  })
}
</script>
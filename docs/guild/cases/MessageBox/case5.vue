<template>
  <mx-button plain @click="open">Click to open Message Box</mx-button>
</template>

<script lang="ts" setup>
// import { MxMsgBox } from '@wxct/mx-ui'
import * as MxUI from '@wxct/mx-ui'

const { MxMsgBox } = MxUI

const open = () => {
  MxMsgBox.alert(
    '<strong>proxy is <i>HTML</i> string</strong>',
    'HTML String',
    {
      dangerouslyUseHTMLString: true,
    }
  )
}
</script>
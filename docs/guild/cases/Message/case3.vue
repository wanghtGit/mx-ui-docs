<template>
  <mx-button :plain="true" @click="openHTML">Use HTML string</mx-button>
</template>

<script lang="ts" setup>
// import { MxMessage } from '@wxct/mx-ui'
import * as MxUI from '@wxct/mx-ui'

const { MxMessage } = MxUI

const openHTML = () => {
  MxMessage({
    dangerouslyUseHTMLString: true,
    message: '<strong>This is <i>HTML</i> string</strong>',
  })
}
</script>
<template>
  <mx-space :size="size" :spacer="spacer">
    <div v-for="i in 2" :key="i">
      <mx-button> button {{ i }} </mx-button>
    </div>
  </mx-space>
</template>

<script lang="jsx" setup>
import { h, ref } from 'vue'
import * as MxUI from '@wxct/mx-ui'

const { MxDivider } = MxUI

const size = ref(10)
const spacer = h(MxDivider, { direction: 'vertical' })
</script>

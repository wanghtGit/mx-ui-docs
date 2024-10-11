<template>
  <!-- <mx-button v-loading.fullscreen.lock="fullscreenLoading" type="primary" @click="openFullScreen1">As a directive</mx-button> -->
   
  <mx-button type="primary" @click="openFullScreen2"> As a service </mx-button>
</template>

<script setup>
import { ref } from 'vue'
// import { MxLoading } from '@wxct/mx-ui'
import * as MxUI from '@wxct/mx-ui'

const { MxLoading } = MxUI

const fullscreenLoading = ref(false)
const openFullScreen1 = () => {
  fullscreenLoading.value = true
  setTimeout(() => {
    fullscreenLoading.value = false
  }, 2000)
}

const openFullScreen2 = () => {
  const loading = MxLoading.service({
    lock: true,
    text: 'Loading',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  setTimeout(() => {
    loading.close()
  }, 2000)
}
</script>

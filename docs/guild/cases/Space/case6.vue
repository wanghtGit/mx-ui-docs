<template>
  <mx-space :size="size" spacer="|">
    <div v-for="i in 2" :key="i">
      <mx-button> button {{ i }} </mx-button>
    </div>
  </mx-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const size = ref(10)
</script>

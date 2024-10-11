<template>
  <mx-search-input v-model="searchText" :onSearch="onSearch" size="large" disabled></mx-search-input>
</template>
<script setup>
import { ref } from 'vue'
// import { MxNotify } from '@wxct/mx-ui'
import * as MxUI from '@wxct/mx-ui'

const { MxNotify } = MxUI

const searchText = ref('')

const onSearch = (val) => {
  MxNotify.success(`触发搜索，搜索内容：${searchText.value}`)
}
</script>

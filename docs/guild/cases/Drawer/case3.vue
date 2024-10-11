<template>
  <mx-button text @click="table = true"
    >Open Drawer with nested table</mx-button
  >
  <mx-button text @click="dialog = true"
    >Open Drawer with nested form</mx-button
  >
  <mx-drawer
    v-model="table"
    title="I have a nested table inside!"
    direction="rtl"
    size="50%"
  >
    <el-table :data="gridData">
      <el-table-column property="date" label="Date" width="150" />
      <el-table-column property="name" label="Name" width="200" />
      <el-table-column property="address" label="Address" />
    </el-table>
  </mx-drawer>

  <mx-drawer
    v-model="dialog"
    title="I have a nested form inside!"
    :before-close="handleClose"
    direction="ltr"
    class="demo-drawer"
  >
    <div class="demo-drawer__content">
      <div>drawer content drawer content drawer content</div>
      <div class="demo-drawer__footer">
        <mx-button @click="cancelForm">Cancel</mx-button>
        <mx-button type="primary" :loading="loading" @click="onClick">
          {{ loading ? 'Submitting ...' : 'Submit' }}
        </mx-button>
      </div>
    </div>
  </mx-drawer>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
// import { MxMsgBox } from '@wxct/mx-ui'
import * as MxUI from '@wxct/mx-ui'

const { MxMsgBox } = MxUI

let timer

const table = ref(false)
const dialog = ref(false)
const loading = ref(false)

const gridData = [
  {
    date: '2016-05-02',
    name: 'Peter Parker',
    address: 'Queens, New York City',
  },
  {
    date: '2016-05-04',
    name: 'Peter Parker',
    address: 'Queens, New York City',
  },
  {
    date: '2016-05-01',
    name: 'Peter Parker',
    address: 'Queens, New York City',
  },
  {
    date: '2016-05-03',
    name: 'Peter Parker',
    address: 'Queens, New York City',
  },
]

const onClick = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
    dialog.value = false
  }, 400)
}

const handleClose = (done) => {
  if (loading.value) {
    return
  }
  MxMsgBox.confirm('Do you want to submit?')
    .then(() => {
      loading.value = true
      timer = setTimeout(() => {
        done()
        // 动画关闭需要一定的时间
        setTimeout(() => {
          loading.value = false
        }, 400)
      }, 2000)
    })
    .catch(() => {
      // catch error
    })
}

const cancelForm = () => {
  loading.value = false
  dialog.value = false
  clearTimeout(timer)
}
</script>
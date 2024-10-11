<template>
  <mx-button type="primary" style="margin-left: 16px" @click="drawer = true">
    open
  </mx-button>
  <mx-button type="primary" style="margin-left: 16px" @click="drawer2 = true">
    with footer
  </mx-button>

  <mx-drawer
    v-model="drawer"
    title="I am the title"
    direction="rtl"
    :before-close="handleClose"
  >
    <span>Hi, there!</span>
  </mx-drawer>
  <mx-drawer v-model="drawer2" direction="ltr">
    <template #header>
      <h4>set title by slot</h4>
    </template>
    <template #default>
      <div>
        <mx-radio v-model="radio1" value="Option 1" size="large">
          Option 1
        </mx-radio>
        <mx-radio v-model="radio1" value="Option 2" size="large">
          Option 2
        </mx-radio>
      </div>
    </template>
    <template #footer>
      <div style="flex: auto">
        <mx-button @click="cancelClick">cancel</mx-button>
        <mx-button type="primary" @click="confirmClick">confirm</mx-button>
      </div>
    </template>
  </mx-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
// import { MxMsgBox } from '@wxct/mx-ui'
import * as MxUI from '@wxct/mx-ui'

const { MxMsgBox } = MxUI

const drawer = ref(false)
const drawer2 = ref(false)
const radio1 = ref('Option 1')
const handleClose = (done: () => void) => {
  MxMsgBox.confirm('Are you sure you want to close this?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}
function cancelClick() {
  drawer2.value = false
}
function confirmClick() {
  MxMsgBox.confirm(`Are you confirm to chose ${radio1.value} ?`)
    .then(() => {
      drawer2.value = false
    })
    .catch(() => {
      // catch error
    })
}
</script>
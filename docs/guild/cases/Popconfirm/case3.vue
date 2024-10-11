<template>
  <mx-popconfirm
    confirm-button-text="Yes"
    cancel-button-text="No"
    icon-color="#626AEF"
    title="Are you sure to delete this?"
    @confirm="confirmEvent"
    @cancel="cancelEvent"
  >
    <template #reference>
      <mx-button>Delete</mx-button>
    </template>
  </mx-popconfirm>
</template>

<script setup lang="ts">
const confirmEvent = () => {
  console.log('confirm!')
}
const cancelEvent = () => {
  console.log('cancel!')
}
</script>
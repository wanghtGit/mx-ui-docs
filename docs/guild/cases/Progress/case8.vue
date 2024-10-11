<template>
  <div class="demo-progress">
    <mx-progress :percentage="50" :stroke-width="15" striped />
    <mx-progress
      :percentage="30"
      :stroke-width="15"
      status="warning"
      striped
      striped-flow
    />
    <mx-progress
      :percentage="100"
      :stroke-width="15"
      status="success"
      striped
      striped-flow
      :duration="10"
    />
    <mx-progress
      :percentage="percentageVal"
      :stroke-width="15"
      status="exception"
      striped
      striped-flow
      :duration="duration"
    />
    <mx-button-group>
      <mx-button @click="decrease" icon="Minus" />
      <mx-button @click="increase" icon="Plus" />
    </mx-button-group>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'

const percentageVal = ref<number>(70)
const duration = computed(() => Math.floor(percentageVal.value / 10))

const increase = () => {
  percentageVal.value += 10
  if (percentageVal.value > 100) {
    percentageVal.value = 100
  }
}
const decrease = () => {
  percentageVal.value -= 10
  if (percentageVal.value < 0) {
    percentageVal.value = 0
  }
}
</script>

<style scoped>
.demo-progress .ijep-progress--line {
  margin-bottom: 15px;
  max-width: 600px;
}
</style>
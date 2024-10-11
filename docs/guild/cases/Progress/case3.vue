<template>
  <div class="demo-progress">
    <mx-progress :percentage="percentageVal" :color="customColor" />

    <mx-progress :percentage="percentageVal" :color="customColorMethod" />

    <mx-progress :percentage="percentageVal" :color="customColors" />
    <mx-progress :percentage="percentageVal" :color="customColors" />
    <div>
      <mx-button-group>
        <mx-button @click="decrease" icon="Minus" />
        <mx-button @click="increase" icon="Plus" />
      </mx-button-group>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const percentageVal = ref(20)
const customColor = ref('#409eff')

const customColors = [
  { color: '#f56c6c', percentage: 20 },
  { color: '#e6a23c', percentage: 40 },
  { color: '#5cb87a', percentage: 60 },
  { color: '#1989fa', percentage: 80 },
  { color: '#6f7ad3', percentage: 100 },
]

const customColorMethod = (perVal: number) => {
  if (perVal < 30) {
    return '#909399'
  }
  if (perVal < 70) {
    return '#e6a23c'
  }
  return '#67c23a'
}
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
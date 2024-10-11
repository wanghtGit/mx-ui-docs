<template>
  <div class="demo-progress">
    <mx-progress type="dashboard" :percentage="percentage1" :color="colors" />
    <mx-progress type="dashboard" :percentage="percentage2" :color="colors" />
    <div>
      <mx-button-group>
        <mx-button @click="decrease" icon="Minus" />
        <mx-button @click="increase" icon="Plus" />
      </mx-button-group>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

const percentage1 = ref(10)
const percentage2 = ref(0)

const colors = [
  { color: '#f56c6c', percentage: 20 },
  { color: '#e6a23c', percentage: 40 },
  { color: '#5cb87a', percentage: 60 },
  { color: '#1989fa', percentage: 80 },
  { color: '#6f7ad3', percentage: 100 },
]

const increase = () => {
  percentage1.value += 10
  if (percentage1.value > 100) {
    percentage1.value = 100
  }
}
const decrease = () => {
  percentage1.value -= 10
  if (percentage1.value < 0) {
    percentage1.value = 0
  }
}
onMounted(() => {
  setInterval(() => {
    percentage2.value = (percentage2.value % 100) + 10
  }, 500)
})
</script>

<style scoped>
.demo-progress .ijep-progress--line {
  margin-bottom: 15px;
  max-width: 600px;
}
.demo-progress .ijep-progress--circle {
  margin-right: 15px;
}
</style>
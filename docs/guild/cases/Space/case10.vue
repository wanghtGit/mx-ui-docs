<template>
  <div>
    <div style="margin-bottom: 15px">
      direction:
      <mx-radio v-model="direction" :dict="[{ key: 'horizontal', label: 'horizontal' }, { key: 'vertical', label: 'vertical' }]"></mx-radio>
    </div>
    <div style="margin-bottom: 15px">
      fillRatio:<mx-slider v-model="fillRatio" />
    </div>
    <mx-space
      fill
      wrap
      :fill-ratio="fillRatio"
      :direction="direction"
      style="width: 100%"
    >
      <mx-card v-for="i in 5" :key="i" class="box-card">
        <template #header>
          <div class="card-header">
            <span>Card name</span>
            <mx-button class="button" text>Operation button</mx-button>
          </div>
        </template>
        <div v-for="o in 4" :key="o" class="text item">
          {{ 'List item ' + o }}
        </div>
      </mx-card>
    </mx-space>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const direction = ref('horizontal')
const fillRatio = ref(30)
</script>

<template>
  <mx-space direction="vertical" alignment="start" :size="30">
    <mx-radio  v-model="size" :dict="sizeDicts"></mx-radio>

    <mx-space wrap :size="size">
      <mx-card v-for="i in 3" :key="i" class="box-card" style="width: 200px">
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
  </mx-space>
</template>

<script setup>
import { ref } from 'vue'

const size = ref('default')
const sizeDicts = ref([
  { key: 'large', label: 'Large' },
  { key: 'default', label: 'Default' },
  { key: 'Small', label: 'Small' },
])
</script>

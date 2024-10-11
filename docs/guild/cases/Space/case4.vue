<template>
  <mx-slider v-model="size" />
  <mx-space wrap :size="size">
    <mx-card v-for="i in 2" :key="i" class="box-card" style="width: 200px">
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
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const size = ref(20)
</script>

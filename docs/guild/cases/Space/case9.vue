<template>
  <div>
    <div style="margin-bottom: 15px">fill: <el-switch v-model="fill" /></div>
    <mx-space :fill="fill" wrap>
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
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const fill = ref(true)
</script>

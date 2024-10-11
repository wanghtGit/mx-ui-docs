<template>
  <div
    style="width: 100%; border: 1px solid #CCCCCC; margin-bottom: 20px;"
    v-loading="loading"
    element-loading-text="Loading..."
    :element-loading-spinner="svg"
    element-loading-svg-view-box="-10, -10, 50, 50"
    element-loading-background="rgba(122, 122, 122, 0.8)"
  >
    <mx-table @query="tableQuery">
      <template #body>
        <mx-table-column type="index" label="序号" width="80" fixed />
        <mx-table-column name="name" width="220" label="姓名" />
        <mx-table-column name="sex" width="220" label="性别" />
        <mx-table-column name="age" width="220" label="年龄" />
      </template>
    </mx-table>
  </div>

  <div
    style="width: 100%; border: 1px solid #CCCCCC;"
    v-loading="loading"
    :element-loading-svg="svg"
    class="custom-loading-svg"
    element-loading-svg-view-box="-10, -10, 50, 50"
  >
    <mx-table @query="tableQuery">
      <template #body>
        <mx-table-column type="index" label="序号" width="80" fixed />
        <mx-table-column name="name" width="220" label="姓名" />
        <mx-table-column name="sex" width="220" label="性别" />
        <mx-table-column name="age" width="220" label="年龄" />
      </template>
    </mx-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const loading = ref(true)
const svg = `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `

const tableList = [
  { name: '哒哒哒', age: 22, sex: '男' },
  { name: '哒哒哒222', age: 33, sex: '男' },
  { name: '哒哒哒333', age: 44, sex: '女' },
]
// 表格的查询方法
const tableQuery = () => {
  return new Promise((resolve) => {
    resolve({
      dataList: tableList
    })
  })
}
</script>
<style>

</style>
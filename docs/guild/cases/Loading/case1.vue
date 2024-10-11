<template>
  <div style="width: 100%; border: 1px solid #CCCCCC;" v-loading="loading"> 
    <mx-table @query="tableQuery">
      <template v-slot:toolbar>
          <mx-button track-point="setPstn"  type="primary">关联任职</mx-button>
          <mx-button track-point="removePstn"  type="primary">批量移除</mx-button>
        </template>
      <template #searcher>
        <mx-table-searcher>
          <template #quick>
            <mx-search-input name="quickWord" placeholder="卡片名称/卡片代码"/>
          </template>
          <template #advance>
            <mx-input name="cardTitle" cols="2" label="卡片名称"/>
            <mx-input name="cardKey" cols="2" label="卡片代码"/>
          </template>
        </mx-table-searcher>
      </template>
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

<style scoped>

</style>
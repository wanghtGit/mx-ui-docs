<template>
  <div class="tree-wrapper">
    <mx-tree
      ref="treeRefNoCheck"
      :tree-data="treeData"
      node-key="treeId"
      :name="treeNameArr"
      :checkboxTree="false"
      expandAll
      doSearch
    >
      <template #header>
        <div class="tree-tip">没有复选框：</div>
      </template>
    </mx-tree>
  </div>

  <div class="tree-wrapper">
    <mx-tree
      ref="treeRef"
      :tree-data="treeData"
      node-key="treeId"
      :name="treeNameArr"
      iconKey="iconType"
      :checkboxTree="true"
      doSearch
    >
      <template #header>
        <div class="tree-tip">有复选框：</div>
      </template>
    </mx-tree>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 树形数据源
const treeData = ref([
  {
    treeId: 'id01',
    label: '节点1',
    iconType: 'Search',
    childs: [
      {
        treeId: 'id01-01',
        label: '节点1-1',
        iconType: 'Edit',
        childs: [
          { treeId: 'id01-01-01', label: '节点1-1-1' }
        ]
      },
      {
        treeId: 'id01-02',
        label: '节点1-2'
      }
    ]
  },
  {
    treeId: 'id02',
    label: '节点2',
    iconType: 'Edit',
    childs: [
      { treeId: 'id02-01', label: '节点2-1' }
    ]
  },
  {
    treeId: 'id03',
    label: '节点3'
  }
])

const treeNameArr = ['label', 'childs']
</script>

<style scoped>
.tree-wrapper {
  display: inline-block;
  margin-right: 20px;
  width: 300px;
  height: 400px;
}
.mx-tree-component {
  border-radius: 3px;
  border: 1px solid #CCCCCC;
}
</style>

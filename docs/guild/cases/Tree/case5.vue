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
      @tree-node-click="treeNodeClick1"
    >
      <template #header>
        <div class="tree-tip">没有复选框：</div>
      </template>
      <template #default>
        <div class="tree-content">{{ content1 }}</div>
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
      @tree-node-click="treeNodeClick2"
    >
      <template #header>
        <div class="tree-tip">有复选框：</div>
      </template>
      <template #default>
        <div class="tree-content">{{ content2 }}</div>
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

const content1 = ref('暂无内容...')
const content2 = ref('暂无内容...')
const treeNodeClick1 = (nodeData) => {
  content1.value = nodeData.label
}
const treeNodeClick2 = (nodeData) => {
  content2.value = nodeData.label
}
</script>

<style lang="less" scoped>
.tree-wrapper {
  margin-bottom: 20px;
  margin-right: 20px;
  width: 100%;
  height: 500px;

  & .mx-tree-component {
    &::v-deep(.mx-tree-component-left) {
      width: 30% !important;
    }
    &::v-deep(.mx-tree-component-content) {
      width: 70% !important;
      left: 30%;
    }
  }
}
.mx-tree-component {
  border-radius: 3px;
  border: 1px solid #CCCCCC;
}
.tree-content {
  padding: 20px;
  font-size: 18px;
}
</style>

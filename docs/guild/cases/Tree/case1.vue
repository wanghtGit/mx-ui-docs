<template>
  <div class="tree-wrapper">
    <mx-tree
      ref="treeRefNoCheck"
      :tree-data="treeData"
      node-key="treeId"
      name="label"
      :checkboxTree="false"
      expandAll
      @tree-node-click="treeNodeClick1"
      @get-tree-selects="getTreeSelects"
      @checkbox-change="checkboxChange"
      @node-contextmenu="nodeContextmenu"
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
      name="label"
      iconKey="iconType"
      :checkboxTree="true"
      :tree-default-expandKeys="menuDefaultExpandKeys"
      @tree-node-click="treeNodeClick"
      @get-tree-selects="getTreeSelects"
      @checkbox-change="checkboxChange"
      @node-contextmenu="nodeContextmenu"
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
    children: [
      {
        treeId: 'id01-01',
        label: '节点1-1',
        iconType: 'Edit',
        children: [
          { treeId: 'id01-01-01', label: '节点1-1-1' },
          { treeId: 'id01-01-02', label: '节点1-1-2' }
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
    children: [
      { treeId: 'id02-01', label: '节点2-1' },
      { treeId: 'id02-02', label: '节点2-2' }
    ]
  },
  {
    treeId: 'id03',
    label: '节点3'
  }
])

// 设置默认展开的节点的的 nodeKey 的集合
const menuDefaultExpandKeys = ref(['id02'])

const treeRefNoCheck = ref()
const rowData = ref({})
// 没有复选框：当节点被点击的时候触发
const treeNodeClick1 = (nodeData, params2, params3, params4) => {
  // console.log('treeNodeClick ---- ', nodeData, params2, params3, params4)
  const treeInst = treeRefNoCheck.value.getTreeRef()
  if (rowData.value && rowData.value.treeId === nodeData.treeId) {
    rowData.value = undefined
    treeInst.setCurrentKey(null, false)
  } else {
    rowData.value = nodeData
  }
}

// 事件：当节点被点击的时候触发
const treeNodeClick = (params1, params2, params3, params4) => {
  console.log('treeNodeClick ----------------------------------------- ', params1, params2, params3, params4)
}
// 事件：点击节点复选框之后触发
const getTreeSelects = (params1, params2) => {
  console.log('getTreeSelects ----------------------------------------- ', params1, params2)
}
// 事件：当复选框被点击的时候触发
const checkboxChange = (params1, params2, params3) => {
  console.log('checkboxChange ----------------------------------------- ', params1, params2, params3)
}
// 事件：当某一节点被鼠标右键点击时会触发该事件
const nodeContextmenu = (params1, params2, params3, params4) => {
  console.log('nodeContextmenu ----------------------------------------- ', params1, params2, params3, params4)
}
</script>

<style scoped>
.tree-wrapper {
  display: inline-block;
  margin-right: 20px;
  width: 300px;
  height: 500px;
}
.mx-tree-component {
  border-radius: 3px;
  border: 1px solid #CCCCCC;
}
</style>

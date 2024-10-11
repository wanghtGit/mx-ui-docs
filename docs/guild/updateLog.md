# 更新日志
记录每次发布新的版本时，组件库中的组件，方法都做了哪些改动。
<br/>


## 1.1.0
- 初始化项目

## 1.1.1
- 调整表格 **MxTable** 组件的样式问题
- 调整打包的配置项，增加相关逻辑：执行打包命令时，无需手动修改版本号，版本号末位能够自动加 **1**

## 1.1.2
- 调整表单组件 **MxFormItem** 中的部分样式

## 1.1.3
- 调整表格 **MxTable** 组件的样式
- 调整 **MxAutocomplete** 组件
- 调整 **MxSearchInput** 组件的样式及部分逻辑
- 增加 **MxSpace** 组件
- 调整 **MxSteps、MxStep** 组件的样式问题
- 调整 **MxTable** 表格中 **MxSelect** 选择框多选时的样式问题
- 调整 **MxStep** 组件属性传递的问题
- 调整 **MxTabs** 组件中内容容器的高度问题
- 表格 **MxTable** 组件增加2个属性设置：**spanMethod** 、 **hideOnSingle**
- 调整 **MxTable** 表格样式，解决表格数据为空且列较多超出表格宽度时，不显示横向滚动条的问题
- 调整 **MxTabs** 组件的样式
- 调整 **MxTag** 组件
- 调整 **MxTree** 组件：
  1. 调整 **MxTree** 的部分展示的样式问题。
  2. 修复 **name** 属性为 Array 类型配置时，树形节点内容不展示的问题。
  3. 增加 **draggable** 、 **highlightCurrent** 的属性设置。
  4. 调整 **MxTree** 组件中 **node-contextmenu** 事件的传参。
  5. 将 **tree-on-select** 事件名称改为 **tree-node-click** ，并调整该事件的传参。
  6. 调整复选框选中时，复选框的边框的颜色
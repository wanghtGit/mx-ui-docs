# MxTree 树形控件
用清晰的层级结构展示信息，可展开或折叠。
<br/>


<script lang="ts" setup>
import case1 from './case1.vue'
import case2 from './case2.vue'
import case3 from './case3.vue'
import case4 from './case4.vue'
import case5 from './case5.vue'
</script>


## 基础用法
基础的树形结构展示。

可通配置 treeData 属性数据，通过 iconKey 属性设置，配置各节点展示内容左侧的icon图标。

<case1></case1>

::: details Show Code
<<< ./case1.vue{vue}
:::


## name属性的配置
name 属性可为 Array类型，或String类型。

当为 String 类型时，name 的值应为 treeData 属性中传递的数据中要展示的节点描述的字段名。

当为 Array 类型时，name[0] 应为 treeData 属性中传递的数据中要展示的节点描述的字段名，name[1] 应为传递给 treeData 属性的树形结构数据中，各节点对应的子节点数据的字段名。

<case2></case2>

::: details Show Code
<<< ./case2.vue{vue}
:::


## 带搜索框的树形控件
通过 doSearch 属性，可以控制是否展示搜索框，用来筛选树形节点中的内容。

<case3></case3>

::: details Show Code
<<< ./case3.vue{vue}
:::


## 可拖拽节点
通过 draggable 属性，控制树形控件，是否开启拖拽节点功能。

<case4></case4>

::: details Show Code
<<< ./case4.vue{vue}
:::


## 插槽内容
default插槽，在组件右侧区域展示自定义内容，左侧区域展示树形控件。

header插槽，在树形控件的顶部展示自定义内容

<case5></case5>

::: details Show Code
<<< ./case5.vue{vue}
:::


## Component API

## 属性
参数 | 说明 | 类型 | 默认值
-- | -- | -- | --
treeData | 必填项，树形控件的数据源，该数据需为嵌套的树形结构的数据 | Array | —
nodeKey | 必填项，每个树节点用来作为唯一标识的属性，整棵树应该是唯一的 | String | —
name | 必填项，树形节点要展示的描述内容对应的字段名 | Array \| String | —
iconKey | 每个树节点展示内容的左侧显示的icon图标的字段名 | String | 'icon'
draggable | 是否开启拖拽节点功能 | Boolean | false
treeDefaultExpandKeys | 默认展开的节点的 key 的数组 | Array | —
treeCheckedKeys | 默认勾选的节点的 key 的数组 | Array | —
expandAll | 是否默认展开所有节点 | Boolean | false
checkboxTree | 节点是否可被选择 | Boolean | false
doSearch | 树形控件是否展示搜索框，以对树形数据进行筛选 | Boolean | false
highlightCurrent | 是否高亮当前选中节点，默认值是 true | Array | true

## 事件
名称 | 说明 | 回调参数
-- | -- | --
tree-node-click | 当节点被点击的时候触发 | 共四个参数：对应于节点点击的节点对象，TreeNode 的 node 属性, TreeNode和事件对象
get-tree-selects | 点击节点复选框之后触发 | 共两个参数，依次为：传递给 treeData 属性的数组中该节点所对应的对象、树目前的选中状态对象，包含 checkedNodes、checkedKeys、halfCheckedNodes、halfCheckedKeys 四个属性
checkbox-change | 当复选框被点击的时候触发 | 共三个参数，依次为：传递给 treeData 属性的数组中该节点所对应的对象、节点本身是否被选中、节点的子树中是否有被选中的节点
node-contextmenu | 当某一节点被鼠标右键点击时会触发该事件 | 共四个参数，依次为：event、传递给 data 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身。

## 暴露
名称 | 说明 | 参数
-- | -- | --
getTreeRef | 获取组件内tree树形控件的实例，可以通过该实例，调用实例身上的各个方法，获取、改变树形控件中的一些数据、及状态（实例身上的方法说明可参考：[参考文档](https://element-plus.org/zh-CN/component/tree.html#%E6%96%B9%E6%B3%95)）。 | —

## 插槽
插槽名 | 说明 <div style="width: 15vw"></div>
-- | --
default | 树形控件右侧展示的自定义的内容区域
header | 树形控件组件顶部展示的自定义内容
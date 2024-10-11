# MxSelect 选择器
当选项过多时，使用下拉菜单展示并选择内容。
<br/>


<script lang="ts" setup>
import case1 from './case1.vue'
import case2 from './case2.vue'
</script>


## 基础用法
传入下拉选择的数据源，展示并选择内容
<case1></case1>

<<< ./case1.vue{vue}


## 支持多选
通过设置 multiple 属性，选择器能够选中多个数据
<case2></case2>

<<< ./case2.vue{vue}


## Component API

## 属性
参数 | 说明 | 类型 | 默认值
-- | -- | -- | --
allow | 能否编辑 | R：不能编辑，为禁用状态<br>W：可以编辑<br>X：不可编辑，且不展示文本框组件样式，只展示对应的值 | W
dict | 选择选项对应的码值的集合 | Array | []
multiple | 能否多选 | Boolean | false
separator | 多选时，各选项内容反显时的分隔符 | String | ','
onBlur | 选择器失去焦点时触发的方法 | Function | —

## 方法
名称 | 说明 <div style="width: 11vw"></div> | 示例 <div style="width: 11vw"></div>
-- | -- | --
&nbsp; | &nbsp; | &nbsp; | &nbsp;

## 事件
名称 | 说明 <div style="width: 11vw"></div> | 类型 <div style="width: 11vw"></div>
-- | -- | --
&nbsp; | &nbsp; | &nbsp;

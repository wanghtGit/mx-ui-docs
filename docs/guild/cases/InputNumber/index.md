# MxNumber 数值输入框
数值输入框，输入相关数值。
<br/>


<script lang="ts" setup>
import case1 from './case1.vue'
import case2 from './case2.vue'
</script>


## 基础用法
输入数值内容
<case1></case1>

::: details Show Code
<<< ./case1.vue{vue}
:::


## 货币类型数值
isCurrency 属性设置为 true 时，输入框中的值会做千分位的格式化展示
<case2></case2>

::: details Show Code
<<< ./case2.vue{vue}
:::


## Component API
MxNumber 组件API可参考 Element-plus 中的组件文档：[参考文档](https://element-plus.org/zh-CN/component/input.html#api)

## 属性
参数 | 说明 | 类型 | 默认值
-- | -- | -- | --
allow | 能否编辑 | R：不能编辑，为禁用状态<br>W：可以编辑<br>X：不可编辑，且不展示文本框组件样式，只展示对应的值 | W
formatter | 内容值的格式化方式 | String | —
isCurrency | 是否是货币类型的值，是的话则展示的值的显示格式不同 | Boolean | false
suffix | 输入框尾部的内容文本 | String | —
isNegative | 值是否为负数 | Boolean | false

## 方法
名称 | 说明 <div style="width: 11vw"></div> | 示例 <div style="width: 11vw"></div>
-- | -- | --
&nbsp; | &nbsp; | &nbsp; | &nbsp;

## 事件
名称 | 说明 <div style="width: 11vw"></div> | 类型 <div style="width: 11vw"></div>
-- | -- | --
&nbsp; | &nbsp; | &nbsp;

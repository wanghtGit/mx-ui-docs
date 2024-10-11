# MxAddress 地址级联选择器
地址级联选择器
<br/>


<script lang="ts" setup>
import case1 from './case1.vue'
</script>


## 基础用法
通过 options 属性，传入相关地址的数据源，展示对应的级联列表

<case1></case1>

::: details Show Code
<<< ./case1.vue{vue}
:::


## Component API

## 属性
参数 | 说明 | 类型 | 默认值
-- | -- | -- | --
options | 地址选项的数据源 | Array | —
allow | 能否编辑 | R：不能编辑，为禁用状态<br>W：可以编辑<br>X：不可编辑，且不展示文本框组件样式，只展示对应的值 | W

## 方法
名称 | 说明 <div style="width: 11vw"></div> | 示例 <div style="width: 11vw"></div>
-- | -- | --
&nbsp; | &nbsp; | &nbsp; | &nbsp;

## 事件
名称 | 说明 <div style="width: 11vw"></div> | 类型 <div style="width: 11vw"></div>
-- | -- | --
&nbsp; | &nbsp; | &nbsp;

# MxTimePicker 时间选择器
用于选择或输入时间
<br/>


<script lang="ts" setup>
import case1 from './case1.vue'
import case2 from './case2.vue'
</script>


## 基础用法
可以选择任意时间

提供了两种交互方式：默认情况下通过鼠标滚轮进行选择，打开arrow-control属性则通过界面上的箭头进行选择。

<case1></case1>

<<< ./case1.vue{vue}


## 限制时间选择范围
也可以限制时间选择范围。

通过 disabledHours，disabledMinutes 和 disabledSeconds 限制可选时间范围。

<case2></case2>

<<< ./case2.vue{vue}


## Component API
组件API可参考 Element-plus 中的组件文档：[参考文档](https://element-plus.org/zh-CN/component/time-picker.html#api)

## 属性
参数 | 说明 | 类型 | 默认值
-- | -- | -- | --
allow | 能否编辑 | R：不能编辑，为禁用状态<br>W：可以编辑<br>X：不可编辑，且不展示文本框组件样式，只展示对应的值 | X

## 方法
名称 | 说明 <div style="width: 11vw"></div> | 示例 <div style="width: 11vw"></div>
-- | -- | --
&nbsp; | &nbsp; | &nbsp; | &nbsp;

## 事件
名称 | 说明 <div style="width: 11vw"></div> | 类型 <div style="width: 11vw"></div>
-- | -- | --
&nbsp; | &nbsp; | &nbsp;

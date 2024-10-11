# MxDatePicker 日期选择器
用于选择日期
<br/>


<script lang="ts" setup>
import case1 from './case1.vue'
</script>


## 选择某一天
选择某一个具体的日期
<case1></case1>

::: details Show Code
<<< ./case1.vue{vue}
:::


## Component API
MxDatePicker 组件API可参考 Element-plus 中的组件文档：[参考文档](https://element-plus.org/zh-CN/component/date-picker.html#api)

## 属性
参数 | 说明 | 类型 | 默认值
-- | -- | -- | --
allow | 能否编辑 | R：不能编辑，为禁用状态<br>W：可以编辑<br>X：不可编辑，且不展示文本框组件样式，只展示对应的值 | W
valueFormat | 显示在输入框中的格式 | 参见 date formats | YYYY-MM-DD
valueFormat | 可选，绑定值的格式。 不指定则绑定值为 Date 对象 | 参见 date formats | YYYY-MM-DD

## 方法
名称 | 说明 <div style="width: 11vw"></div> | 示例 <div style="width: 11vw"></div>
-- | -- | --
&nbsp; | &nbsp; | &nbsp; | &nbsp;

## 事件
名称 | 说明 <div style="width: 11vw"></div> | 类型 <div style="width: 11vw"></div>
-- | -- | --
&nbsp; | &nbsp; | &nbsp;

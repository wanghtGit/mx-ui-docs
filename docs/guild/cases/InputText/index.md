# MxInput 输入框
通过鼠标或键盘输入字符
<br/>


<script lang="ts" setup>
import case1 from './case1.vue'
import case2 from './case2.vue'
</script>


## 基础用法
<case1></case1>

<<< ./case1.vue{vue}


## 密码框
<case2></case2>

<<< ./case2.vue{vue}


## Component API

## 属性
参数 | 说明 | 类型 | 默认值
-- | -- | -- | --
allow | 能否编辑 | R：不能编辑，为禁用状态<br>W：可以编辑<br>X：不可编辑，且不展示文本框组件样式，只展示对应的值 | W
type | input框的类型 | string | text
maxLength | 同原生 maxlength 属性 | string / number | —
placeholder | 输入框占位文本 | string | —
showPassword | 是否显示切换密码图标 | boolean | false
isNumber | 是否是数值类型 | boolean | false

## 方法
名称 | 说明 <div style="width: 11vw"></div> | 示例 <div style="width: 11vw"></div>
-- | -- | --
&nbsp; | &nbsp; | &nbsp; | &nbsp;

## 事件
名称 | 说明 <div style="width: 11vw"></div> | 类型 <div style="width: 11vw"></div>
-- | -- | --
change | 输入值改变时出发该事件 | Function

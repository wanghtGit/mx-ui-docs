# MxColorPicker 颜色选择器
用于颜色选择，支持多种格式。
<br/>


<script lang="ts" setup>
import case1 from './case1.vue'
import case2 from './case2.vue'
import case3 from './case3.vue'
import case4 from './case4.vue'
</script>


## 基础用法
使用 v-model 与 Vue 实例中的一个变量进行双向绑定，绑定的变量需要是字符串类型。

<case1></case1>

::: details Show Code
<<< ./case1.vue{vue}
:::


## 选择透明度
ColorPicker 支持普通颜色，也支持带 Alpha 通道的颜色，通过show-alpha属性即可控制是否支持透明度的选择。 要启用 Alpha 选择，只需添加 show-alpha 属性。

<case2></case2>

::: details Show Code
<<< ./case2.vue{vue}
:::


## 预定义颜色
ColorPicker 支持预定义颜色

<case3></case3>
 
::: details Show Code
<<< ./case3.vue{vue}
:::


## 不同尺寸

<case4></case4>
 
::: details Show Code
<<< ./case4.vue{vue}
:::


## Component API
组件API可参考 Element-plus 中的组件文档：[参考文档](https://element-plus.org/zh-CN/component/color-picker.html#api)

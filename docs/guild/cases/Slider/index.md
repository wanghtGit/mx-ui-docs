# MxSlider 滑块
通过拖动滑块在一个固定区间内进行选择
<br/>


<script lang="ts" setup>
import case1 from './case1.vue'
import case2 from './case2.vue'
import case3 from './case3.vue'
import case4 from './case4.vue'
import case5 from './case5.vue'
import case6 from './case6.vue'
import case7 from './case7.vue'
import case8 from './case8.vue'
</script>


## 基础用法 
在拖动滑块时，显示当前值

通过设置绑定值自定义滑块的初始值

<case1></case1>

::: details Show Code
<<< ./case1.vue{vue}
:::


## 离散值 
选项可以是离散的

改变step的值可以改变步长， 通过设置 show-stops 属性可以显示间断点

<case2></case2>

::: details Show Code
<<< ./case2.vue{vue}
:::


## 带有输入框的滑块 ​
通过输入框输入来改变当前的值。

设置 show-input 属性会在右侧显示一个输入框

<case3></case3>

::: details Show Code
<<< ./case3.vue{vue}
:::


## 不同尺寸 ​

<case4></case4>

::: details Show Code
<<< ./case4.vue{vue}
:::


## 位置
您可以自定义 Tooltip 提示的位置。 ​

<case5></case5>

::: details Show Code
<<< ./case5.vue{vue}
:::


## 范围选择
你还可以选择一个范围值

配置 range 属性以激活范围选择模式，该属性的绑定值是一个数组，由最小边界值和最大边界值组成。

<case6></case6>

::: details Show Code
<<< ./case6.vue{vue}
:::


## 垂直模式
配置 vertical 属性为 true 启用垂直模式。 在垂直模式下，必须设置 height 属性。

<case7></case7>

::: details Show Code
<<< ./case7.vue{vue}
:::


## 显示标记
设置 marks 属性可以在滑块上显示标记。

<case8></case8>

::: details Show Code
<<< ./case8.vue{vue}
:::


## Component API
组件API可参考 Element-plus 中的组件文档：[参考文档](https://element-plus.org/zh-CN/component/slider.html#api)

# MxProgress 进度条
用于展示操作进度，告知用户当前状态和预期。
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


## 直线进度条 
Progress 组件设置 percentage 属性即可，表示进度条对应的百分比。 该属性必填，并且必须在 0-100 的范围内。 你可以通过设置 format 来自定义文字显示的格式。

<case1></case1>

::: details Show Code
<<< ./case1.vue{vue}
:::


## 进度条内显示百分比标识
百分比不占用额外空间，适用于文件上传等场景。

Progress 组件可通过 stroke-width 属性更改进度条的高度，并可通过 text-inside 属性来改变进度条内部的文字。

<case2></case2>

::: details Show Code
<<< ./case2.vue{vue}
:::


## 自定义进度条的颜色
可以通过 color 属性来设置进度条的颜色。 该属性可以接受十六进制颜色值，函数和数组。

<case3></case3>

::: details Show Code
<<< ./case3.vue{vue}
:::


## 环形进度条
Progress 组件可通过 type 属性来指定使用环形进度条，在环形进度条中，还可以通过 width 属性来设置其大小。

<case4></case4>

::: details Show Code
<<< ./case4.vue{vue}
:::


## 仪表盘形进度条
您也可以指定 type 属性到 dashboard 使用控制面板进度栏。

<case5></case5>

::: details Show Code
<<< ./case5.vue{vue}
:::


## 自定义内容
通过默认插槽添加自定义内容。

<case6></case6>

::: details Show Code
<<< ./case6.vue{vue}
:::


## 动画进度条
使用 indeterminate 属性来设置不确定的进度， duration 来控制动画持续时间。

<case7></case7>

::: details Show Code
<<< ./case7.vue{vue}
:::


<!-- ## 条纹进度条(当前组件基于的Element-plus的版本为 2.2.9 ，该版本不支持该属性设置)
通过设置 striped 属性获取条纹进度条。 也可以使用 striped-flow 属性来使条纹流动起来。 使用duration 属性来控制条纹流动的速度。

<case8></case8>

::: details Show Code
<<< ./case8.vue{vue}
::: -->


## Component API
组件API可参考 Element-plus 中的组件文档：[参考文档](https://element-plus.org/zh-CN/component/progress.html#api)

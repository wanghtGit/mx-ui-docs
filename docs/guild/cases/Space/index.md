# MxSpace 间距
虽然我们拥有 Divider 组件，但很多时候我们需要不是一个被 Divider 组件 分割开的页面结构，因此我们会重复的使用很多的 Divider 组件，这在我们的开发效率上造成了一定的困扰。 间距组件就是为了解决这种困扰应运而生的。
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
import case9 from './case9.vue'
import case10 from './case10.vue'
</script>


## 基础用法 
最基础的用法，通过这个组件来给组件之间提供统一的间距。

通过间距组件来给多个组件之间提供间距

<case1></case1>

::: details Show Code
<<< ./case1.vue{vue}
:::


## 垂直布局 
使用 direction 来控制布局的方式, 背后实际上是利用了 flex-direction 来控制.

我们也提供垂直布局方式。

<case2></case2>

::: details Show Code
<<< ./case2.vue{vue}
:::


## 控制间距的大小 ​
通过调整 size 的值来控制间距的大小

使用内置的 small、default、large 来设置间距大小，分别对应 8px、12px 和 16px 的间距。 默认的间距大小为 small，也就是 8px。

您也可以通过自定义的 size 来控制大小， 参见下一个部分。

<case3></case3>

::: details Show Code
<<< ./case3.vue{vue}
:::


## 自定义 Size
很多时候，内建的大小不满足设计师的要求，我们可以通过传入自己定义的大小 (数值类型) 来设置。 ​

<case4></case4>

::: details Show Code
<<< ./case4.vue{vue}
:::

::: tip
不要让 MxSpace 与使用依赖父元素百分比宽度（或高度）的元素一起使用（例如 MxSlider），这样会造成光标不同步。
:::


## 自动换行
在 **水平 (horizontal)** 模式下，通过使用 **wrap（布尔类型）** 来控制自动换行行为。

利用 wrap 属性控制换行

<case5></case5>

::: details Show Code
<<< ./case5.vue{vue}
:::


## 行间分隔符
有时候，仅仅在行间加空白并不能满足我们的日常需求，此时分隔符 (spacer) 就可以发挥非常好的作用了。


## 字母数字类型分隔符

<case6></case6>

::: details Show Code
<<< ./case6.vue{vue}
:::


## 分隔符还可以是 VNode 类型

<case7></case7>

::: details Show Code
<<< ./case7.vue{vue}
:::


## 对齐方式
设置该值可以调整所有子节点在容器内的对齐方式，可设置的值与 align-items一致。

使用 alignment 属性来对齐

<case8></case8>

::: details Show Code
<<< ./case8.vue{vue}
:::


## 填充容器
通过 fill**（布尔类型）**参数，您可以控制子节点是否自动填充容器。

下面的例子中，当设置为 fill 时，子节点的宽度会自动适配容器的宽度。

用 fill 属性让子节点自动填充容器

<case9></case9>

::: details Show Code
<<< ./case9.vue{vue}
:::

也可以使用 fillRatio 参数，自定义填充的比例， 默认值为 100，代表基于父容器宽度的 100% 进行填充

需要注意的是，水平布局和垂直布局的表现形式稍有不同，具体的效果可以查看下面的例子

用 fillRatio 自定义填充比例

<case10></case10>

::: details Show Code
<<< ./case10.vue{vue}
:::


## Component API
组件API可参考 Element-plus 中的组件文档：[参考文档](https://element-plus.org/zh-CN/component/space.html#api)

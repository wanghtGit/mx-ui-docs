# Layout 布局
通过基础的 24 分栏，迅速简便地创建布局。
<br/>


::: tip
组件默认使用 Flex 布局，不需要手动设置 type="flex"。

请注意父容器避免使用 inline 相关样式，会导致组件宽度不能撑满。
:::


<script lang="ts" setup>
import case1 from './case1.vue'
import case2 from './case2.vue'
import case3 from './case3.vue'
import case4 from './case4.vue'
import case5 from './case5.vue'
import case6 from './case6.vue'
</script>


## 基础布局
使用列创建基础网格布局。

通过 row 和 col 组件，并通过 col 组件的 span 属性我们就可以自由地组合布局。

<case1></case1>

::: details Show Code
<<< ./case1.vue{vue}
:::


## 分栏间隔
支持列间距。

行提供 gutter 属性来指定列之间的间距，其默认值为0。

<case2></case2>

::: details Show Code
<<< ./case2.vue{vue}
:::


## 混合布局
通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。

<case3></case3>
 
::: details Show Code
<<< ./case3.vue{vue}
:::


## 列偏移
您可以指定列偏移量。

通过制定 col 组件的 offset 属性可以指定分栏偏移的栏数。

<case4></case4>
 
::: details Show Code
<<< ./case4.vue{vue}
:::


## 对齐方式
默认使用 flex 布局来对分栏进行灵活的对齐。

您可以通过justify 属性来定义子元素的排版方式，其取值为start、center、end、space-between、space-around或space-evenly。

<case5></case5>
 
::: details Show Code
<<< ./case5.vue{vue}
:::


## 响应式布局
参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：xs、sm、md、lg 和 xl。

<case6></case6>
 
::: details Show Code
<<< ./case6.vue{vue}
:::


## Row API
MxRow 组件API可参考 Element-plus 中的组件文档：[参考文档](https://element-plus.org/zh-CN/component/layout.html#row-api)


## Col API
MxCol 组件API可参考 Element-plus 中的组件文档：[参考文档](https://element-plus.org/zh-CN/component/layout.html#col-api)

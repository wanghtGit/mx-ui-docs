# MxCard 卡片
将信息聚合在卡片容器中展示。
<br/>


<script lang="ts" setup>
import case1 from './case1.vue'
import case2 from './case2.vue'
import case3 from './case3.vue'
import case4 from './case4.vue'
</script>


## 基础用法
卡片包含标题，内容以及操作区域。

Card 组件由 header body 和 footer组成。 header 和 footer是可选的，其内容取决于一个具名的 slot。

<case1></case1>

::: details Show Code
<<< ./case1.vue{vue}
:::


## 简单卡片
卡片可以只有内容区域。

<case2></case2>

::: details Show Code
<<< ./case2.vue{vue}
:::


## 有图片内容的卡片
可配置定义更丰富的内容展示。

配置 body-style 属性来自定义 body 部分的样式。 在这个例子中我们还使用了 el-col 组件来布局。

<case3></case3>
 
::: details Show Code
<<< ./case3.vue{vue}
:::


## 带有阴影效果的卡片
你可以定义什么时候展示卡片的阴影效果。

通过 shadow 属性设置卡片阴影出现的时机。 该属性的值可以是：always、hover 或 never。

<case4></case4>
 
::: details Show Code
<<< ./case4.vue{vue}
:::


## Component API
组件部分API可参考 Element-plus 中的组件文档：[参考文档](https://element-plus.org/zh-CN/component/card.html#api)

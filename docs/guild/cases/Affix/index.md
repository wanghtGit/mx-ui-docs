# MxAffix 固钉
将页面元素固定在特定可视区域。
<br/>


<script lang="ts" setup>
import case1 from './case1.vue'
import case2 from './case2.vue'
import case3 from './case3.vue'
</script>


## 基础用法
固钉默认固定在页面顶部。

通过设置 offset 属性来改变吸顶距离，默认值为 0。

<case1></case1>

::: details Show Code
<<< ./case1.vue{vue}
:::


## 指定容器
通过设置 target 属性，让固钉始终保持在容器内， 超过范围则隐藏。

请注意容器避免出现滚动条。

<case2></case2>
 
::: details Show Code
<<< ./case2.vue{vue}
:::


## 固定位置
Affix 组件提供 2 个固定的位置参数 top 和 bottom。

通过设置 position 属性来改变固定位置，默认值为 top 。

<case3></case3>

::: details Show Code
<<< ./case3.vue{vue}
:::


## Component API
组件API可参考 Element-plus 中的组件文档：[参考文档](https://element-plus.org/zh-CN/component/affix.html#api)

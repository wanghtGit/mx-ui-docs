# MxPopconfirm 气泡确认框
点击某个元素弹出一个简单的气泡确认框
<br/>


<script lang="ts" setup>
import case1 from './case1.vue'
import case2 from './case2.vue'
import case3 from './case3.vue'
</script>


## 基础用法 
在 Popconfirm 中，只有 title 属性可用，content 属性会被忽略。

<case1></case1>

::: details Show Code
<<< ./case1.vue{vue}
:::


## 自定义弹出框的内容
可以在 Popconfirm 中自定义内容。

<case2></case2>

::: details Show Code
<<< ./case2.vue{vue}
:::


## 多种让 Popconfirm 出现的方法
可以在 Popconfirm 中自定义内容。

<case3></case3>

::: details Show Code
<<< ./case3.vue{vue}
:::


## Component API
组件API可参考 Element-plus 中的组件文档：[参考文档](https://element-plus.org/zh-CN/component/popconfirm.html#api)

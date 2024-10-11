# MxForm 表单
表单包含 输入框, 单选框, 下拉选择, 多选框 等用户输入的组件。 使用表单，您可以收集、验证和提交数据。
<br/>


<script lang="ts" setup>
import case1 from './case1.vue'
import case2 from './case2.vue'
import case3 from './case3.vue'
</script>


## 基础用法
最基础的表单包括各种输入表单项，比如input、select、radio、checkbox 等。

在每一个 form 组件中，你需要一个 form-item 字段作为输入项的容器，用于获取值与验证值。

<case1></case1>

::: details Show Code
<<< ./case1.vue{vue}
:::


## 基础用法2
分栏间隔2

<case2></case2>

::: details Show Code
<<< ./case2.vue{vue}
:::


## 基础用法3
混合布局3

<case3></case3>
 
::: details Show Code
<<< ./case3.vue{vue}
:::


## Component API
组件API可参考 Element-plus 中的组件文档：[参考文档](https://element-plus.org/zh-CN/component/layout.html#col-api)

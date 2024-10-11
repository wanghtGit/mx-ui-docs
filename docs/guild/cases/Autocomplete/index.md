# MxAutocomplete 自动补全输入框
根据输入内容提供对应的输入建议。
<br/>


<script lang="ts" setup>
import case1 from './case1.vue'
import case2 from './case2.vue'
import case3 from './case3.vue'
</script>


## 基础用法
Autocomplete 组件提供输入建议。

fetch-suggestions 属性是返回建议输入的方法。 在此示例中， querySearch(queryString, cb) 方法通过 cb(data) 给 Autocomplete 组件返回建议。

<case1></case1>
 
::: details Show Code
<<< ./case1.vue{vue}
:::


## 自定义模板
自定义如何显示输入建议。

使用 scoped slot 自定义输入建议。 在这个范围中，你可以使用 item 键来访问当前输入建议对象。

<case2></case2>

::: details Show Code
<<< ./case2.vue{vue}
:::


## 远程搜索
从服务端搜索数据。

<case3></case3>

::: details Show Code
<<< ./case3.vue{vue}
:::


## Component API
组件API可参考 Element-plus 中的组件文档：[参考文档](https://element-plus.org/zh-CN/component/autocomplete.html#api)

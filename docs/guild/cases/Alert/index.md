# MxAlert 提示
用于页面中展示重要的提示信息。
<br/>


<script lang="ts" setup>
import case1 from './case1.vue'
import case2 from './case2.vue'
import case3 from './case3.vue'
</script>


## 基础用法
Alert 组件不属于浮层元素，不会自动消失或关闭。

Alert 组件提供四种类型，由 type 属性指定，默认值为 info。

Alert 组件提供了两个不同的主题：light 和 dark。通过设置 effect 属性来改变主题，默认为 light。

<case1></case1>

::: details Show Code
<<< ./case1.vue{vue}
:::


## 使用图标
你可以通过为 Alert 组件添加图标来提高可读性。

通过设置 show-icon 属性来显示 Alert 的 icon，这能更有效地向用户展示你的显示意图。

<case2></case2>

::: details Show Code
<<< ./case2.vue{vue}
:::


## 带图标和描述
在最后, 这是一个带有图标和描述的例子。

<case3></case3>

::: details Show Code
<<< ./case3.vue{vue}
:::


## Component API
组件API可参考 Element-plus 中的组件文档：[参考文档](https://element-plus.org/zh-CN/component/alert.html#alert-api)


## 属性
名称 | 说明 | 类型 | 默认值
-- | -- | -- | --
title | Alert 标题。 | string | —
type | Alert 类型。 | 'success' \| 'warning' \| 'info' \| 'error' | info
description | 描述性文本 | string | —
closable | 是否可以关闭 | boolean | true
center | 文字是否居中 | boolean | false
close-text | 自定义关闭按钮文本 | string | —
show-icon | 是否显示类型图标 | boolean | false
effect | 主题样式	| 'light' \| 'dark' | light

## 事件
名称 | 描述 <div style="width: 11vw"></div> | 类型 <div style="width: 11vw"></div>
-- | -- | --
close | 关闭 Alert 时触发的事件 | Function

## 插槽
名称 <div style="width: 11vw"></div> | 描述 <div style="width: 11vw"></div>
-- | --
default | Alert 内容描述
title | 标题的内容

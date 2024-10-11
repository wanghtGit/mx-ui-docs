# MxSteps 步骤条
引导用户按照流程完成任务的分步导航条， 可根据实际应用场景设定步骤，步骤不得少于 2 步。
<br/>


<script lang="ts" setup>
import case1 from './case1.vue'
import case2 from './case2.vue'
</script>


## 基础用法 
MxSteps可以通过 onUp 、 onDown 属性绑定的方法的返回值，控制上下步的切换

onUp 、 onDown 绑定的方法，需要有返回值，可以返回 Boolean 类型的值，当返回 true 时，能够上一步、下一步切换，反之无法切换步骤

onUp 、 onDown 绑定的方法，也可以返回一个 Promise 类型的值，当步骤切换，涉及到一些异步操作时，需要返回 Promise 类型值来控制。

<case1></case1>


::: details Show Code
<<< ./case1.vue{vue}
:::


## MxSteps API
MxSteps 组件API可参考 Element-plus 中的组件文档：[参考文档](https://element-plus.org/zh-CN/component/steps.html#steps-api)

## 属性
参数 | 说明 <div style="width: 11vw"></div> | 类型 <div style="width: 11vw"></div> | 默认值
-- | -- | -- | --
onUp | 点击上一步按钮触发的方法，该方法需有返回值，返回值可以为 Boolean，或者 Promise 类型，当返回值为 true时，能够切换到上一步，当涉及到异步操作时，需返回 Promise 类型 | Function | —
onDown | 点击下一步按钮触发的方法，该方法需有返回值，返回值类型同 onUp 方法 | Function | —
onFinish | 点击完成按钮触发的方法，该方法需有返回值，返回值类型同 onUp 方法 | Function | —

## 方法
名称 | 说明 <div style="width: 11vw"></div> | 示例 <div style="width: 11vw"></div>
-- | -- | --
&nbsp; | &nbsp; | &nbsp; | &nbsp;

## 事件
名称 | 说明 <div style="width: 11vw"></div> | 类型 <div style="width: 11vw"></div>
-- | -- | --
&nbsp; | &nbsp; | &nbsp; | &nbsp;


## MxStep API

## 属性
参数 | 说明 <div style="width: 11vw"></div> | 类型 <div style="width: 11vw"></div> | 默认值
-- | -- | -- | --
title | 标题 | string | ''
description | 描述文案 | string | ''
icon | Step 组件的自定义图标。 | string  / Component | —
status | 设置当前步骤的状态， 不设置则根据 steps 确定状态 | '' / 'wait' / 'process' / 'finish' / 'error' / 'success' | —

## 插槽
插槽名 <div style="width: 11vw"></div> | 说明 <div style="width: 11vw"></div>
-- | --
default | 当前步骤对应的展示的内容
# MxBgCover 带背景色容器
带白色背景、或不带背景色的容器
<br/>


<script lang="ts" setup>
import case1 from './case1.vue'
</script>


## 基础用法
通过 useBg 属性，控制该容器是否有白色背景色

<case1></case1>
 
::: details Show Code
<<< ./case1.vue{vue}
:::


## Component API


## 属性
名称 | 说明 | 类型 | 默认值
-- | -- | -- | --
className | 组件的类名 | string | —
useBg | 容器组件是否为白色背景色 | boolean | true
style | 组件的样式 | object | —

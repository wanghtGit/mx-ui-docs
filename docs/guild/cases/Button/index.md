# MxButton 按钮
常用的操作按钮。
<br/>


<script lang="ts" setup>
import case1 from './case1.vue'
import case2 from './case2.vue'
import case3 from './case3.vue'
import case4 from './case4.vue'
</script>


## 基础用法
使用 type、plain、round 和 circle 来定义按钮的样式。

<case1></case1>

::: details Show Code
<<< ./case1.vue{vue}
:::


## 禁用状态
你可以使用 disabled 属性来定义按钮是否被禁用。

使用 disabled 属性来控制按钮是否为禁用状态。 该属性接受一个 Boolean 类型的值。

<case2></case2>

::: details Show Code
<<< ./case2.vue{vue}
:::


## 按钮组
以按钮组的方式出现，常用于多项类似操作。

使用 \<mx-button-group> 对多个按钮分组。

<case3></case3>
 
::: details Show Code
<<< ./case3.vue{vue}
:::


## 调整尺寸
除了默认的大小，按钮组件还提供了几种额外的尺寸可供选择，以便适配不同的场景。

使用 size 属性额外配置尺寸，可使用 large和small两种值。

<case4></case4>
 
::: details Show Code
<<< ./case4.vue{vue}
:::


## EmbedButton 按钮
增加了类名 fisok-embedbutton 拥有特殊样式的按钮

<mx-embed-button type="primary">EmbedButton 按钮</mx-embed-button>
 
::: details Show Code
```vue
<mx-embed-button type="primary">EmbedButton 按钮</mx-embed-button>
```
```css
/* 按钮类名对应的特殊样式 */
.fisok-embedbutton {
  height: 28px;
  border-radius: 3px;
  font-size: 12px;
}
```
:::


## Button API
MxButton 组件部分API可参考 Element-plus 中的组件文档：[参考文档](https://element-plus.org/zh-CN/component/button.html#button-api)

## 属性
参数 | 说明 <div style="width: 11vw"></div> | 类型 <div style="width: 11vw"></div> | 默认值
-- | -- | -- | --
icon | 按钮中的图标 | String | —
disabled | 按钮的禁用状态 | Boolean | false
loading | 按钮的loading状态 | Boolean | false
className | 按钮的类名 | String | —
allow | 按钮的权限控制 | X：按钮不可见<br>R：按钮可见<br>W：按钮可见 | —
size | 按钮的尺寸大小 | large<br>default<br>small | —
type | 按钮的类型 | primary<br>success<br>warning<br>danger<br>info | —

## 方法
名称 | 说明 <div style="width: 11vw"></div> | 示例 <div style="width: 11vw"></div>
-- | -- | --
&nbsp; | &nbsp; | &nbsp; | &nbsp;

## 事件
名称 | 说明 <div style="width: 11vw"></div> | 类型 <div style="width: 11vw"></div>
-- | -- | --
click | 按钮点击事件 | Function：(event: MouseEvent) => void


## ButtonGroup API
MxButtonGroup 组件API可参考 Element-plus 中的组件文档：[参考文档](https://element-plus.org/zh-CN/component/button.html#buttongroup-api)

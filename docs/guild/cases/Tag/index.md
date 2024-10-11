# MxTag 标签
用于标记和选择。
<br/>


<script lang="ts" setup>
import case1 from './case1.vue'
import case2 from './case2.vue'
import case3 from './case3.vue'
import case4 from './case4.vue'
import case5 from './case5.vue'
import case6 from './case6.vue'
// import case7 from './case7.vue'
</script>


## 基础用法
由 type 属性来选择 tag 的类型。 也可以通过 color 属性来自定义背景色。

<case1></case1>

::: details Show Code
<<< ./case1.vue{vue}
:::


## 可移除标签
设置 closable 属性可以定义一个标签是否可移除。 它接受一个 Boolean。 默认的标签移除时会附带渐变动画。 如果不想使用，可以设置 disable-transitions 属性，它接受一个 Boolean，true 为关闭。 当 Tag 被移除时会触发 close 事件。

<case2></case2>

::: details Show Code
<<< ./case2.vue{vue}
:::


## 动态编辑标签
动态编辑标签可以通过点击标签关闭按钮后触发的 close 事件来实现。

<case3></case3>

::: details Show Code
<<< ./case3.vue{vue}
:::


## 不同尺寸
Tag 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

使用 size 属性来设置额外尺寸, 可选值包括 large, default 或 small。

<case4></case4>

::: details Show Code
<<< ./case4.vue{vue}
:::


## 主题
Tag 组件提供了三个不同的主题：dark、light 和 plain。

通过设置 effect 属性来改变主题，默认为 light。

<case5></case5>

::: details Show Code
<<< ./case5.vue{vue}
:::


## 圆形标签
Tag 可以向按钮组件一样变为完全圆形。

<case6></case6>

::: details Show Code
<<< ./case6.vue{vue}
:::


<!-- ## 可选中的标签 (mx-ui中没有增加 mx-check-tag 组件，故没有该功能)
有时候因为业务需求，我们可能会需要用到类似复选框的标签，但是按钮式的复选框的样式又不满足需求，此时我们就可以用到 check-tag组件。 您可以在 **2.5.4** 中使用 type 属性。

check-tag 的基础使用方法，check-tag 提供的 API 非常简单。

<case7></case7>

::: details Show Code
<<< ./case7.vue{vue}
::: -->


## Tag API
MxTag 组件API可参考 Element-plus 中的组件文档：[参考文档](https://element-plus.org/zh-CN/component/tag.html#tag-api)

<!-- ## CheckTag API
MxCheckTag 组件API可参考 Element-plus 中的组件文档：[参考文档](https://element-plus.org/zh-CN/component/tag.html#checktag-api) -->

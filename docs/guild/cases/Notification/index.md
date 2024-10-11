# MxNotify 通知
悬浮出现在页面角落，显示全局的通知提醒消息。
<br/>


<script lang="ts" setup>
import case1 from './case1.vue'
import case2 from './case2.vue'
import case3 from './case3.vue'
import case4 from './case4.vue'
import case5 from './case5.vue'
</script>


## 基础用法
MxUI 注册了 $MxNotify 方法并且它接受一个 Object 作为其参数。 在最简单的情况下，你可以通过设置 title 和 message 属性来设置通知的标题和正文内容。 默认情况下，通知在4500毫秒后自动关闭，但你可以通过设置 duration 属性来自定义通知的展示时间。 如果你将它设置为 0，那么通知将不会自动关闭。 需要注意的是 duration 接收一个 Number，单位为毫秒。

<case1></case1>

::: details Show Code
<<< ./case1.vue{vue}
:::


## 不同类型的通知
我们提供了四种不同类型的提醒框：success、warning、info 和error。

MxUI 为 Notification 组件准备了四种通知类型：success, warning, info, error。 他们可以设置 type 字段来修改，除上述的四个值之外的值会被忽略。 同时，我们也为 Notification 的各种 type 注册了单独的方法，可以在不传入 type 字段的情况下像 open3 和 open4 那样直接调用。

<case2></case2>

::: details Show Code
<<< ./case2.vue{vue}
:::


## 自定义消息弹出的位置
可以让 Notification 从屏幕四角中的任意一角弹出

使用 position 属性设置 Notification 的弹出位置， 支持四个选项：top-right、top-left、bottom-right 和 bottom-left， 默认为 top-right。

<case3></case3>

::: details Show Code
<<< ./case3.vue{vue}
:::


## 有位置偏移的通知栏
能够设置偏移量来使 Notification 偏移默认位置。

Notification 提供设置偏移量的功能，通过设置 offset 字段，可以使弹出的消息距屏幕边缘偏移一段距离。 注意在同一时刻，每一个的 Notification 实例应当具有一个相同的偏移量。

<case4></case4>

::: details Show Code
<<< ./case4.vue{vue}
:::


## 使用 HTML 片段作为正文内容
message 支持传入 HTML 字符串来作为正文内容。

将 dangerouslyUseHTMLString 属性设置为 true，message 属性就会被当作 HTML 片段处理。

<case5></case5>

::: details Show Code
<<< ./case5.vue{vue}
:::

::: warning
message 属性虽然支持传入 HTML 片段，但是在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 XSS 攻击。 因此在 dangerouslyUseHTMLString 打开的情况下，请确保 message 的内容是可信的，永远不要将用户提交的内容赋值给 message 属性。
:::


## 全局方法
MxUI 为 app.config.globalProperties 添加了全局方法 $MxNotify 。 因此在 Vue instance 中可以采用本页面中的方式调用 Notification。


## 单独引用

```js
import { MxNotify } from '@wxct/mx-ui'
```

你可以在对应的处理函数内调用 MxNotify(options) 来呼出通知栏。 我们也提前定义了多个 type 的单独调用方法，如 MxNotify.success(options)。 当你需要关闭页面上所有的通知栏的时候，可以调用 MxNotify.closeAll() 来关闭所有的实例。


## Component API
组件API可参考 Element-plus 中的组件文档：[参考文档](https://element-plus.org/zh-CN/component/notification.html#api)

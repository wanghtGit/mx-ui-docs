# MxMessage 消息提示
常用于主动操作后的反馈提示。 与 Notification 的区别是后者更多用于系统级通知的被动提醒。
<br/>


<script lang="ts" setup>
import case1 from './case1.vue'
import case2 from './case2.vue'
import case3 from './case3.vue'
</script>


## 基础用法
从顶部出现，3 秒后自动消失。

MxUI 注册了一个全局的 $MxMessage方法用于调用。 Message 可以接收一个字符串或一个 VNode 作为参数，它会被显示为正文内容。

<case1></case1>

::: details Show Code
<<< ./case1.vue{vue}
:::


## 不同状态
用来显示「成功、警告、消息、错误」类的操作反馈。

当需要自定义更多属性时，Message 也可以接收一个对象为参数。 比如，设置 type 字段可以定义不同的状态，默认为info。 此时正文内容以 message 的值传入。 同时，我们也为 Message 的各种 type 注册了方法，可以在不传入 type 字段的情况下像 open4 那样直接调用。

<case2></case2>

::: details Show Code
<<< ./case2.vue{vue}
:::


## 使用 HTML 片段作为正文内容
message 还支持使用 HTML 字符串作为正文内容。

将dangerouslyUseHTMLString属性设置为 true,message 就会被当作 HTML 片段处理。

<case3></case3>

::: details Show Code
<<< ./case3.vue{vue}
:::


## 全局方法
MxUI 为 app.config.globalProperties 添加了全局方法 $MxMessage。 因此在 vue 实例中你可以使用当前页面中的调用方式调用 Message


## 单独引用

```js
import { MxMessage } from '@wxct/mx-ui'
```

此时调用方法为 MxMessage(options)。 我们也为每个 type 定义了各自的方法，如 MxMessage.success(options)。 并且可以调用 MxMessage.closeAll() 手动关闭所有实例。


## Component API
组件API可参考 Element-plus 中的组件文档：[参考文档](https://element-plus.org/zh-CN/component/message.html#api)

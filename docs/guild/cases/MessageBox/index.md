# MxMsgBox 消息弹出框
模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息和提交内容。
<br/>


::: tip
从设计上来说，MessageBox 的作用是美化系统自带的 alert、confirm 和 prompt，因此适合展示较为简单的内容。 如果需要弹出较为复杂的内容，请使用 Dialog。
:::


<script lang="ts" setup>
import case1 from './case1.vue'
import case2 from './case2.vue'
import case3 from './case3.vue'
import case4 from './case4.vue'
import case5 from './case5.vue'
</script>


## 消息提示
当用户进行操作时会被触发，该对话框中断用户操作，直到用户确认知晓后才可关闭。

调用 MxMsgBox.alert 方法以打开 alert 框。 它模拟了系统的 alert，无法通过按下 ESC 或点击框外关闭。 此例中接收了两个参数，message和title。 值得一提的是，窗口被关闭后，它默认会返回一个Promise对象便于进行后续操作的处理。 若不确定浏览器是否支持Promise，可自行引入第三方 polyfill 或像本例一样使用回调进行后续处理。

<case1></case1>

::: details Show Code
<<< ./case1.vue{vue}
:::


## 确认消息
提示用户确认其已经触发的动作，并询问是否进行此操作时会用到此对话框。

调用 MxMsgBox.confirm 方法以打开 confirm 框。它模拟了系统的 confirm。 Message Box 组件也拥有极高的定制性，我们可以传入 options 作为第三个参数，它是一个字面量对象。 type 字段表明消息类型，可以为success，error，info和 warning，无效的设置将会被忽略。 需要注意的是，第二个参数 title 必须定义为 String 类型，如果是 Object，会被当做为 options使用。 在这里我们返回了一个 Promise 来处理后续响应。

<case2></case2>

::: details Show Code
<<< ./case2.vue{vue}
:::


## 提交内容
当需要用户输入内容时，可以使用 Prompt 类型的消息框。

调用 MxMsgBox.prompt 方法以打开 prompt 框。它模拟了系统的 prompt。 可以用 inputPattern 字段自己规定匹配模式， 使用 inputValidator 来指定验证方法，它应该返回 Boolean 或 String。 返回 false 或 String 表示验证失败， 返回的字符串将用作 inputErrorMessage，用来提示用户错误原因。 此外，可以用 inputPlaceholder 字段来定义输入框的占位符。

<case3></case3>

::: details Show Code
<<< ./case3.vue{vue}
:::


## 使用 VNode
message 可以是 VNode。

<case4></case4>

::: details Show Code
<<< ./case4.vue{vue}
:::


## 使用 HTML 片段
message 支持传入 HTML 字符串来作为正文内容。

将 dangerouslyUseHTMLString 属性设置为 true，message 属性就会被当作 HTML 片段处理。

<case5></case5>

::: details Show Code
<<< ./case5.vue{vue}
:::


## 全局方法
如果你完整引入了 MxUI，它会为 app.config.globalProperties 添加如下全局方法：$MxMsgBox。 因此在 Vue 实例中可以采用本页面中的方式来调用MessageBox。 参数如下：
- $MxMsgBox(options)
- $MxMsgBox.alert(message, title, options)
- $MxMsgBox.confirm(message, title, options)
- $MxMsgBox.prompt(message, title, options)


## 按需引入

```js
import { MxMsgBox } from '@wxct/mx-ui'
```

那么对应于上述四个全局方法的调用方法依次为：MxMsgBox、MxMsgBox.alert、MxMsgBox.confirm 和 MxMsgBox.prompt。 参数同上所述。


## Component API
组件API可参考 Element-plus 中的组件文档：[参考文档](https://element-plus.org/zh-CN/component/message-box.html#api)

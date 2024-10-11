# MxDialog 对话框
在保留当前页面状态的情况下，告知用户并承载相关操作。
<br/>


<script lang="ts" setup>
import case1 from './case1.vue'
import case2 from './case2.vue'
import case3 from './case3.vue'
import case4 from './case4.vue'
</script>


## 基础用法
Dialog 弹出一个对话框，适合需要定制性更大的场景。

需要设置 model-value / v-model 属性，它接收 Boolean，当为 true 时显示 Dialog。 Dialog 分为两个部分：body 和 footer，footer 需要具名为 footer 的 slot。 title 属性用于定义标题，它是可选的，默认值为空。 最后，本例还展示了 before-close 的用法。

<case1></case1>

::: details Show Code
<<< ./case1.vue{vue}
:::


::: tip
before-close 只会在用户点击关闭按钮或者对话框的遮罩区域时被调用。 如果你在 footer 具名 slot 里添加了用于关闭 Dialog 的按钮，那么可以在按钮的点击回调函数里加入 before-close 的相关逻辑。
:::


## 自定义内容
对话框的内容可以是任何东西，甚至是一个表格或表单。 此示例显示如何在 Dialog 中使用 Element Plus 的表格和表单。

<case2></case2>

::: details Show Code
<<< ./case2.vue{vue}
:::


## 自定义头部
header 可用于自定义显示标题的区域。 为了保持可用性，除了使用此插槽外，使用 title 属性，或使用 titleId 插槽属性来指定哪些元素应该读取为对话框标题。

<case3></case3>
 
::: details Show Code
<<< ./case3.vue{vue}
:::


## 嵌套的对话框
如果需要在一个 Dialog 内部嵌套另一个 Dialog，需要使用 append-to-body 属性。

通常我们不建议使用嵌套对话框。 如果你需要在页面上呈现多个对话框，你可以简单地打平它们，以便它们彼此之间是平级关系。 如果必须要在一个对话框内展示另一个对话框，可以将内部嵌套的对话框属性 append-to-body 设置为 true，嵌套的对话框将附加到 body 而不是其父节点，这样两个对话框都可以被正确地渲染。

<case4></case4>
 
::: details Show Code
<<< ./case4.vue{vue}
:::


## MxOpenModal 方法
可以通过调用该方法，并传入相关的配置参数，快速打开一个 Dialog 弹窗，并在 Dialog 中展示相关内容。

- 如果你完整引入了 MxUI，它会为 app.config.globalProperties 添加如下全局方法：$MxOpenModal

- 或者，可以通过如下方式，单独引入 MxOpenModal 方法
```js
import { MxOpenModal } from '@wxct/mx-ui'
```

- **MxOpenModal 方法调用时的传参如下：**
```js
// MxOpenModal 中的传参

export default function openModal (
  com, // 调用 openModal 方法打开弹窗中要展示的内容，可以传Dom元素，也可以传入组件
  {
    name, // 可不传
    footer = () => {}, // Dialog 组件，渲染底部区域(footer插槽)的渲染函数（注：useDefaultButton 属性设置为 false 时，才会执行该方法，渲染自定义底部区域内容）
    onClose, // 关闭 Dialog 组件 时，执行的方法
    onOk, // 点击 Dialog 组件，底部区域(footer插槽)的确定按钮时执行的方法（注：useDefaultButton 设置为 true 时，才会展示出底部区域的默认渲染的 确定 按钮）
    onRef, // 当前方法打开的 Dialog 实例渲染完成(onMounted)后，执行的方法
    width = '1000px', // 设置 Dialog 组件的 width 属性
    title = '', // 设置 Dialog 组件的 title 属性
    drag = false, // 设置 Dialog 组件的 draggable 属性
    showFooter = true, // Dialog 组件 是否展示底部(footer插槽)区域
    useDefaultButton = false, // Dialog 组件 的底部(footer插槽)区域，是否展示默认的操作按钮
  }
) {
// ......
}
```


## Component API
组件API可参考 Element-plus 中的组件文档：[参考文档](https://element-plus.org/zh-CN/component/dialog.html#api)

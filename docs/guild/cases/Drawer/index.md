# MxDrawer 抽屉
有些时候, Dialog 组件并不满足我们的需求, 比如你的表单很长, 亦或是你需要临时展示一些文档, Drawer 拥有和 Dialog 几乎相同的 API, 在 UI 上带来不一样的体验.
<br/>


::: tip
在 Vue 3 之后的版本 v-model 可以用于任何一个组件，visible.sync 已被移除，请使用 v-model="visibilityBinding" 来控制抽屉组件的显示和隐藏状态。
:::


<script lang="ts" setup>
import case1 from './case1.vue'
import case2 from './case2.vue'
import case3 from './case3.vue'
</script>


## 基础用法
呼出一个临时的侧边栏, 可以从多个方向呼出

你必须像 Dialog一样为 Drawer 设置 model-value 属性来控制 Drawer 的显示与隐藏状态，该属性接受一个 boolean 类型。 Drawer 包含三部分: title & body & footer, 其中 title 是一个具名 slot, 你还可以通过 title 属性来设置标题, 默认情况下它是一个空字符串, 其中 body 部分是 Drawer 组件的主区域, 它包含了用户定义的主要内容. footer和title用法一致, 用来显示页脚信息. 当 Drawer 打开时，默认设置是从右至左打开 30% 浏览器宽度。 你可以通过传入对应的 direction 和 size 属性来修改这一默认行为。 下面一个示例将展示如何使用 before-close API，更多详细用法请参考页面底部的 API 部分。

<case1></case1>

::: details Show Code
<<< ./case1.vue{vue}
:::


## 不添加 Title
当你不需要标题的时候，你可以将它移除。

通过设置 with-header 属性为 false 来控制是否显示标题。 如果你的应用需要具备可访问性，请务必设置好 title。

<case2></case2>

::: details Show Code
<<< ./case2.vue{vue}
:::


## 自定义内容
像 Dialog 组件一样，Drawer 也可以用来显示多种不同的交互。

<case3></case3>
 
::: details Show Code
<<< ./case3.vue{vue}
:::


## MxOpenDrawer 方法
可以通过调用该方法，并传入相关的配置参数，快速打开一个 Drawer 抽屉，并在 Drawer 中展示相关内容。

- 如果你完整引入了 MxUI，它会为 app.config.globalProperties 添加如下全局方法：$MxOpenDrawer

- 或者，可以通过如下方式，单独引入 MxOpenDrawer 方法
```js
import { MxOpenDrawer } from '@wxct/mx-ui'
```

- **MxOpenDrawer 方法调用时的传参如下：**
```js
// MxOpenDrawer 中的传参

export default function openDrawer (
  com, // 调用 openDrawer 方法打开抽屉中要展示的内容，可以传Dom元素，也可以传入组件
  {
    name, // 可不传
    footer = () => {}, // Drawer 组件，渲染底部区域(footer插槽)的渲染函数（注：useDefaultButton 属性设置为 false 时，才会执行该方法，渲染自定义底部区域内容）
    direction, // 设置 Drawer 组件的 direction 属性
    size, // 设置 Drawer 组件的 size 属性
    onClose, // 关闭 Drawer 组件 时，执行的方法
    onOk, // 点击 Drawer 组件，底部区域(footer插槽)的确定按钮时执行的方法（注：useDefaultButton 设置为 true 时，才会展示出底部区域的默认渲染的 确定 按钮）
    title = '', // 设置 Drawer 组件的 title 属性
    showFooter = true, // Drawer 组件 是否展示底部(footer插槽)区域
    useDefaultButton = false, // Drawer 组件 的底部(footer插槽)区域，是否展示默认的操作按钮
    closeModal = false // Drawer 组件 点击遮罩层时，是否关闭当前抽屉弹窗
  }
) {
// ......
}
```


## Component API
组件API可参考 Element-plus 中的组件文档：[参考文档](https://element-plus.org/zh-CN/component/drawer.html#api)

# MxDropdown 下拉菜单
将动作或菜单折叠到下拉菜单中。
<br/>


<script lang="ts" setup>
import case1 from './case1.vue'
import case2 from './case2.vue'
import case3 from './case3.vue'
</script>


## 基础用法
悬停在下拉菜单上以展开更多操作。

通过组件 slot 来设置下拉触发的元素以及需要通过具名 slot 为 dropdown 来设置下拉菜单。 默认情况下，只需要悬停在触发菜单的元素上即可，无需点击也会显示下拉菜单。

<case1></case1>

::: details Show Code
<<< ./case1.vue{vue}
:::


## 触发对象
可使用按钮触发下拉菜单。

设置 split-button 属性来让触发下拉元素呈现为按钮组，左边是功能按钮，右边是触发下拉菜单的按钮，设置为 true 即可。 如果你想要在第三和第四个选项之间添加一个分隔符，你只需要为第四个选项添加一个 divider 的 CSS class。

<case2></case2>

::: details Show Code
<<< ./case2.vue{vue}
:::


## 触发方式
可以配置点击激活或者悬停激活。

将 trigger 属性设置为 click 即可， 默认为 hover。

<case3></case3>
 
::: details Show Code
<<< ./case3.vue{vue}
:::


## Dropdown API
MxDropdown 组件API可参考 Element-plus 中的组件文档：[参考文档](https://element-plus.org/zh-CN/component/dropdown.html#dropdown-api)

## DropdownMenu API
MxDropdownMenu 组件API可参考 Element-plus 中的组件文档：[参考文档](https://element-plus.org/zh-CN/component/dropdown.html#dropdown-menu-api)

## DropdownItem API
MxDropdownItem 组件API可参考 Element-plus 中的组件文档：[参考文档](https://element-plus.org/zh-CN/component/dropdown.html#dropdown-item-api)

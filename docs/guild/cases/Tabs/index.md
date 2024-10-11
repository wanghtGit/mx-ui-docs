# MxTabs 标签页
分隔内容上有关联但属于不同类别的数据集合。
<br/>


<script lang="ts" setup>
import case1 from './case1.vue'
import case2 from './case2.vue'
import case3 from './case3.vue'
import case4 from './case4.vue'
import case5 from './case5.vue'
import case6 from './case6.vue'
import case7 from './case7.vue'
import case8 from './case8.vue'
import case9 from './case9.vue'
</script>


## 基础用法
基础的、简洁的标签页。

Tabs 组件提供了选项卡功能， 默认选中第一个标签页，你也可以通过 value 属性来指定当前选中的标签页。

<case1></case1>

::: details Show Code
<<< ./case1.vue{vue}
:::


## 卡片风格的标签
你可以设置具有卡片风格的标签。

只需要设置 type 属性为 card 就可以使选项卡改变为标签风格。

<case2></case2>

::: details Show Code
<<< ./case2.vue{vue}
:::


## 带有边框的卡片风格
你还可以设置标签页为带有边框的卡片

将 type 设置为 border-card。

<case3></case3>

::: details Show Code
<<< ./case3.vue{vue}
:::


## 标签位置的设置
可以通过 tab-position 设置标签的位置

标签一共有四个方向的设置 tabPosition="left|right|top|bottom"

<case4></case4>

::: details Show Code
<<< ./case4.vue{vue}
:::


## 自定义标签页的图标
可以通过 icon 属性,设置标签页的图标的内容

<case5></case5>

::: details Show Code
<<< ./case5.vue{vue}
:::


## 动态增减标签页
增减标签页按钮只能在选项卡样式的标签页下使用

<case6></case6>

::: details Show Code
<<< ./case6.vue{vue}
:::


<!-- ## 添加按钮自定义图标(当前组件基于的Element-plus的版本为 2.2.9 ，该版本不支持该属性设置)
增减标签页按钮只能在选项卡样式的标签页下使用

<case7></case7>

::: details Show Code
<<< ./case7.vue{vue}
::: -->


## 增加标签页触发器自定义

<case8></case8>

::: details Show Code
<<< ./case8.vue{vue}
:::


## MxJsxTabs 组件
MxJsxTabs 组件的属性、方法等，同 MxTabs组件的属性、方法等。

可以通过 **data** 属性，配置多个标签页。

<case9></case9>

::: details Show Code
<<< ./case9.vue{vue}
:::


## Tabs API
MxTabs 组件API可参考 Element-plus 中的组件文档：[参考文档](https://element-plus.org/zh-CN/component/tabs.html#tabs-api)

## TabPane API
MxTabPane 组件API可参考 Element-plus 中的组件文档：[参考文档](https://element-plus.org/zh-CN/component/tabs.html#tab-pane-api)
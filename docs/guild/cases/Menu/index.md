# MxMenu 菜单
为网站提供导航功能的菜单。
<br/>


::: tip
如果您想要覆盖mx-menu的默认高度, 您可以使用下列CSS

```css
.ijep-menu--horizontal {
  --el-menu-horizontal-height: 100px;
}
```
:::


<script lang="ts" setup>
import case1 from './case1.vue'
import case2 from './case2.vue'
import case3 from './case3.vue'
</script>


## 顶栏
顶部栏菜单可以在各种场景中使用。

导航菜单默认为垂直模式，通过将 mode 属性设置为 horizontal 来使导航菜单变更为水平模式。 另外，在菜单中通过 sub-menu 组件可以生成二级菜单。 Menu 还提供了background-color、text-color和active-text-color，分别用于设置菜单的背景色、菜单的文字颜色和当前激活菜单的文字颜色。

<case1></case1>

::: details Show Code
<<< ./case1.vue{vue}
:::




## Menu API
MxMenu 组件API可参考 Element-plus 中的组件文档：[参考文档](https://element-plus.org/zh-CN/component/menu.html#%E8%8F%9C%E5%8D%95-api)

## SubMenu API
MxSubMenu 组件API可参考 Element-plus 中的组件文档：[参考文档](https://element-plus.org/zh-CN/component/menu.html#submenu-api)

## MenuItem API
MxMenuItem 组件API可参考 Element-plus 中的组件文档：[参考文档](https://element-plus.org/zh-CN/component/menu.html#menu-item-api)

## MenuItemGroup API
MxMenuItemGroup 组件API可参考 Element-plus 中的组件文档：[参考文档](https://element-plus.org/zh-CN/component/menu.html#menu-item-group-api)

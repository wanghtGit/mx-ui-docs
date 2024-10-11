# MxSearchInput 搜索输入框
带搜索图标，搜索按钮的输入框
<br/>


<script lang="ts" setup>
import case1 from './case1.vue'
import case2 from './case2.vue'
</script>


## 基础用法 
点击搜索按钮，会触发 onSearch 方法，执行相关搜索逻辑

<case1></case1>

<<< ./case1.vue{vue}


## 禁用状态的搜索框 
设置 disabled 属性为 tue，禁止搜索框编辑，搜索按钮也无法点击

<case2></case2>

<<< ./case2.vue{vue}


## Component API
组件API可参考 Element-plus 中的组件文档：[参考文档](https://element-plus.org/zh-CN/component/input.html#api)

## 属性
参数 | 说明 <div style="width: 11vw"></div> | 类型 <div style="width: 11vw"></div> | 默认值
-- | -- | -- | --
placeholder | 搜索输入框的占位文本 | String | —
onSearch | 点击搜索按钮会触发的方法 | Function | —
maxLength | 同原生 maxlength 属性 | string / number | —
disabled | 搜索框是否禁用 | Boolean | false

## 方法
名称 | 说明 <div style="width: 11vw"></div> | 示例 <div style="width: 11vw"></div>
-- | -- | --
&nbsp; | &nbsp; | &nbsp; | &nbsp;

## 事件
名称 | 说明 <div style="width: 11vw"></div> | 类型 <div style="width: 11vw"></div>
-- | -- | --
&nbsp; | &nbsp; | &nbsp; | &nbsp;
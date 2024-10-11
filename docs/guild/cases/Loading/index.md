# Mxloading 加载
加载数据时显示动效。
<br/>


<!-- 因在示例组件中，使用 v-loading 的话，项目打包会报错，所以不在此文档中展示相关示例，示例可参考 Element-plus 中的文档 -->


<script lang="ts" setup>
// import case1 from './case1.vue'
// import case2 from './case2.vue'
import case3 from './case3.vue'
</script>


## 区域加载
在需要的时候展示加载动画，防止页面失去响应提高用户体验（例如表格）。

Element Plus 提供了两种调用 Loading 的方法：指令和服务。 对于自定义指令 v-loading，只需要绑定 boolean 值即可。 默认状况下，Loading 遮罩会插入到绑定元素的子节点。 通过添加 body 修饰符，可以使遮罩插入至 Dom 中的 body 上。

<!-- <case1></case1> -->

::: details Show Code
<<< ./case1.vue{vue}
:::


## 自定义加载中组件内容
你可以自定义加载中组件的文字，图标，以及背景颜色。

在绑定了v-loading指令的元素上添加element-loading-text属性，其值会被渲染为加载文案，并显示在加载图标的下方。 类似地，element-loading-spinner、element-loading-background 和 element-loading-svg 属性分别用来设定 svg 图标、背景色值、加载图标。

<!-- <case2></case2> -->

::: details Show Code
<<< ./case2.vue{vue}
:::

::: warning
虽然 element-loading-spinner / element-loading-svg 属性支持传入的 HTML 片段，但是动态在网站上渲染任意的 HTML 是非常危险的，因为很容易导致 XSS 攻击。 请确保 element-loading-spinner / element-loading-svg的内容是可信的， 不要将用户提交的内容赋值给 element-loading-spinner / element-loading-svg 属性。
:::


## 让加载组件铺满整个屏幕
加载数据时显示全屏动画。

当使用指令方式时，全屏遮罩需要添加 fullscreen 修饰符（遮罩会插入至 body 上） 此时若需要锁定屏幕的滚动，可以使用 lock 修饰符； 当使用服务方式时，遮罩默认即为全屏，无需额外设置。

<case3></case3>

::: details Show Code
<<< ./case3.vue{vue}
:::


## 以服务的方式来调用
Loading 还可以以服务的方式调用。 你可以像这样引入 Loading 服务：

``` js
import { MxLoading } from 'element-plus'
```

在你需要的时候通过下面的方式调用：

``` js
MxLoading.service(options)
```

其中 options 参数为 Loading 的配置项，具体见 [参考文档](https://element-plus.org/zh-CN/component/loading.html#api)。 LoadingService 会返回一个 Loading 实例，可通过调用该实例的 close 方法来关闭它：

``` js
const loadingInstance = MxLoading.service(options)
nextTick(() => {
  // Loading should be closed asynchronously
  loadingInstance.close()
})
```

需要注意的是，以服务的方式调用的全屏 Loading 是单例的。 若在前一个全屏 Loading 关闭前再次调用全屏 Loading，并不会创建一个新的 Loading 实例，而是返回现有全屏 Loading 的实例：

``` js
const loadingInstance1 = MxLoading.service({ fullscreen: true })
const loadingInstance2 = MxLoading.service({ fullscreen: true })
console.log(loadingInstance1 === loadingInstance2) // true
```

此时调用它们中任意一个的 close 方法都能关闭这个全屏 Loading。

如果完整引入了 MxUI，那么 app.config.globalProperties 上会有一个全局方法 $MxLoading ， 它的调用方式为：this.$MxLoading(options) ，同样会返回一个 Loading 实例。


## 参考文档
组件使用示例，以及 API 可参考 Element-plus 中的组件文档：[参考文档](https://element-plus.org/zh-CN/component/loading.html)

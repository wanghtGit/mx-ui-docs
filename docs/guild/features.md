# 特性
 
## 简要介绍
 
该组件库采用 Vue3、Less 对 Element-plus@2.2.9 进行二次封装实现的！
 
## 两种使用方式
 
- 全局引入所有组件

```js
// src/main.js 文件中

import { createApp } from 'vue';

import MxUI from '@wxct/mx-ui';
import '@wxct/mx-ui/lib/mxui.css';

const instance = createApp(App)

instance.use(MxUI)
instance.mount('#app')

```

- 按需引入部分组件

```vue
<!-- vue文件中 -->

<script setup>
import { MxButton } from '@wxct/mx-ui'
import '@wxct/mx-ui/lib/mxui.css';
</script>

<template>
  <mx-button>按钮</mx-button>
</template>
```
# 快速上手

## 安装
由于MxUI组件库上传到了npm私库中，所以在项目中使用时，需要在使用该组件库的项目的根目录下创建 **.npmrc** 文件，并完成对应私库的相关配置

```bash
# .npmrc 文件的需要设置的内容

@wxct:registry=http://172.16.100.189:8081/repository/npm-hosted/
```

在设置了对应的npm私库地址源之后，在项目中执行相应命令，拉取MxUI组件库

```bash
$ npm install @wxct/mx-ui
```

在项目中install并引用了MxUI组件后，由于在MxUI中，一些组件使用了部分ES6以上的高阶方法，因此如果使用组件后项目报错的话，需要在项目的 **vue.config.js** 配置文件中，增加一项配置，解决高阶方法的适配问题。
```js
module.exports = {
  // 将 node_modules 包中的指定的包编译一遍（通过 babel 编译文件：ES6+ → ES5）
  transpileDependencies: [
    '@wxct/mx-ui',
  ],
  ...
}
```

## 使用

**全局注册所有组件**

```js
// src/main.js 文件中

import { createApp } from 'vue';

import MxUI from '@wxct/mx-ui';
import '@wxct/mx-ui/lib/mxui.css';

const instance = createApp(App)

instance.use(MxUI)
instance.mount('#app')
```

**按需引用部分组件**

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
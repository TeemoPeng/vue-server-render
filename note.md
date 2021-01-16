#### 服务端渲染 Server Side Rending

由服务端返回HTML给前端展示

##### 优点

首屏渲染快、有利于SEO


#### 服务端知识

##### express

```js
npm install express -S
```



#### 基础服务

```js
const express = require('express')

// 获取express实例
const server = express()

// 编写路由处理不同url请求
server.get('/', (req, res) => {
  res.send('<strong>hello world</strong>')
})

// 监听
server.listen(80, () => {
  console.log('server is running ...')

})
```



#### 基础实现

使用渲染器将Vue实例转换成HTML字符串并返回

安装 vue-server-renderer

```js
npm install -S vue-server-renderer
```


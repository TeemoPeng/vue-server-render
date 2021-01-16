const express = require('express')
// 获取express实例
const server = express()

// 创建vue实例
const Vue = require('vue')
// 获取渲染器实例
const { createRenderer } = require('vue-server-renderer')
const renderer = createRenderer()

// 编写路由处理不同url请求
server.get('/', (req, res) => {
    const app = new Vue({
        template: '<div @click="doSomething">{{msg}}</div>',
        data() {
            return {
                msg: 'hello world'
            }
        },
        methods: {
            doSomething() {
                console.log('doSomething')
            }
        }
    })
    // 使用渲染器渲染vue实例
    renderer.renderToString(app).then(html => {
        res.send(html)
    }).catch(err => {
        res.status(500)
        res.send('Internal  server error, 500.')
    })
})

// 监听
server.listen(80, () => {
    console.log('server is running ...')
})
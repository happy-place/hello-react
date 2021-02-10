// nodejs + express 快速构建模拟服务器
// 启动方式:node  student_server.js

// 1. 引入express 模块 yarn add express

// 2.导入express，创建app
const express = require('express')
const app = express()

// 3.构建路由分发前拦截器，（可选）
app.use((req,resp,next)=>{
    console.log(`收到来自 ${req.get('Host')} 对 ${req.url} 资源的请求`);
    next();
})

// 4.对请求资源地址做映射
app.get('/students',(req,resp)=>{
    const students = [
        {id:'001',name:'tom',age:18},
        {id:'002',name:'jerry',age:19},
        {id:'003',name:'tony',age:120},
    ];
    resp.send(students); // 输出响应
})

// 5.启动服务器，并注册启动过程回调监听
app.listen(5000,(err)=>{
    if(!err){
        console.log('服务器启动成功：http://localhost:5000/students')
    }else{
        console.error('服务器启动失败',err)
    }
})
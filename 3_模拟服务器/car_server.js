const express = require('express')
const app = express()

app.use((req,resp,next)=>{
    console.log(` 收到来自${req.get('Host')}对${req.url}的请求`)
    next();
})

app.get('/cars',(req,resp)=>{
    let cars = [
        {id:1,name:'car1',price:10.3},
        {id:2,name:'car2',price:11.3},
        {id:3,name:'car3',price:12.3},
    ]
    resp.send(cars);
})

app.listen(5001,(err)=>{
    if(!err){
        console.log('服务启动成功: http://localhost:5001/cars')
    }else{
        console.error('服务启动失败：',err)
    }
})
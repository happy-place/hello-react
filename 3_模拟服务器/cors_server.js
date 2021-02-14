const express = require('express')
var bodyParser = require('body-parser');
const app = express()
const port = 5003

const data = {
    1: {id:1,name:'car1',price:10.3},
    2: {id:2,name:'car2',price:11.3},
    3: {id:3,name:'car3',price:12.3},
}

// 路由分发前拦截器
app.use((req,resp,next)=>{
    console.log(` 收到来自${req.get('Host')}对${req.url}的请求`)
    next();
})

// 创建application/json 解析器
var jsonParser = bodyParser.json()

// 创建 application/x-www-form-urlencoded 解析器
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept,Authorization");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    //这段仅仅为了方便返回json而已
    res.header("Content-Type", "application/json;charset=utf-8");
    if(req.method === 'OPTIONS') {
        //让options请求快速返回
        res.sendStatus(200);
    } else {
        next();
    }
});

app.get('/cors',(req,resp)=>{
    let {query:{id}} = req;
    resp.send(data[id]);
})

app.post('/cors',urlencodedParser,(req,resp)=>{
    let {body:{id}} = req; // ?id=1 转换为 body 中 {id:1} 格式
    console.log(id)
    resp.send(data[id]);
})

app.listen(port,(err)=>{
    if(!err){
        console.log(`服务启动成功: GET http://localhost:${port}/cors?id=1`)
    }else{
        console.error('服务启动失败：',err)
    }
})
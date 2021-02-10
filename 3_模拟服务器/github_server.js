const express = require('express')
const axios = require('axios')
const path = require('path')

const app = express()

const port = 5002
const data = change_image(require('./public/json/github.json').items)


function change_image(data){
    let newData = data.map(e => {
        e.avatar_url = `http://localhost:${port}/static/image/butterfly.png`
        return e;
    })
    return newData;
}

app.use((req,resp,next)=>{
    console.log(`收到来自${req.get('Host')}对${req.url}的请求`);
    next();
})

app.get('/user',(req,resp)=>{
    // 获取真实github数据,(如果失败，转而获取模拟数据替代)
    let {query:{v}} = req;
    console.log(v)
    // https://api.github.com/search/users?q=xxxxxx
    axios.get(`https://api.github.com/search/users?q=${v}`).then(
        result => {
            resp.send(change_image(result.data.items))
        },
        err => {
            console.error('获取数据失败',err)
            resp.send(data)
        }
    )
})

app.get('/user2',(req,resp)=>{
    // 获取模拟github数据
    let {query:{v}} = req;
    resp.send(data)
})

app.use('/static', express.static(path.join(__dirname, 'public')))

app.listen(port,(err)=>{
    if(!err){
        console.log(`服务启动成功\n请求真实github数据：http://localhost:${port}/user?v=xxx\n请求模拟github数据：http://localhost:${port}/user2?v=xxx`)
    }else{
        console.error(err)
    }
})
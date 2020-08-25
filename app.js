//引入express模块
const express=require("express")
//创建服务器
const app=express()
//引入bodyparser中间件
const bodyParser=require("body-parser")
//引入user路由器
const user=require("./router/user.js")
//创建端口
app.listen(8080);

//静态托管public
app.use(express.static("./public"))
//使用bodyparser
app.use(bodyParser.urlencoded({
	extended:false
}))





//使用路由器
app.use("/user",user)
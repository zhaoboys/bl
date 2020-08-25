//引入express模块
const express=require("express")
//创建路由器
const user=express.Router()
//引入连接池
const pool=require("../pool.js")

//登陆
user.get("/login/:phone&:upwd",function(req,res){
	pool.query("select*from bl_user where (phone=? or email=?) and upwd=?",[req.params.phone,req.params.phone ,req.params.upwd],function(err,result){
		if(err){throw err}
		if(result.length==0){
			res.send("0")
		}else{
			res.send("1")
		}
	})
})



//注册
user.post("/reg",function(req,res){
	pool.query("insert into bl_user set ?",[req.body],function(err,result){
		if(err){throw err}
		if(result.affectedRows==0){
			res.send("0")
		}else{
			res.send("1")
		}
	})
})


//按照uid查找
user.get("/select/:uid",function(req,res){
	let sql="select uid,uname,sex,birthday,autog from bl_user where uid=?"
	pool.query(sql,[req.params.uid],function(err,result){
		if(err){throw err}
		res.send(result)
	})
})


//保存用户信息
user.put("/update",function(req,res){
	let sql="update bl_user set ? where uid=?"
	pool.query(sql,[req.body,req.body.uid],function(err,result){
		if(err){throw err}
		if(result.affectedRows==0){
			res.send("0")
		}else{
			res.send("1")
		}
	})
})



//导出路由器
module.exports=user
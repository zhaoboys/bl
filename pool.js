//引入mysql模块
const mysql=require("mysql")
//创建连接池
const pool=mysql.createPool({
	host:"127.0.0.1",
	port:3306,
	user:"root",
	password:"",
	database:"bl",
	connectionLimit:"20"
})

module.exports=pool
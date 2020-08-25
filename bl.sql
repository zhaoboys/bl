SET NAMES UTF8;
DROP DATABASE IF EXISTS bl;
CREATE DATABASE bl CHARSET=UTF8;
USE bl;
/* 用户信息表*/
CREATE TABLE bl_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
	uname varchar(32) not null,
	upwd varchar(32) not null,
	sex boolean  default 0 ,
	phone varchar(16) not null,
	user_name varchar(32) ,
	birthday date,
	id varchar(32) ,
	avatar varchar(128),
	email varchar(32)
);

/*内容分类*/
CREATE TABLE bl_type(
  tid INT PRIMARY KEY AUTO_INCREMENT,
	tname varchar(32)
);
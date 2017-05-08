/*
 * @detail:f7视图之间的切换需要借助请求
 * @author: kelichao
 * @访问 test.html  与test1.html
 */

// 引入express模块
var express = require('express');
// 初始化express模块
var app = express();

app.use(express.static('dist'));

// 对网站首页的访问返回 "Hello World!" 字样
// 地址为http://localhost:3000
app.get('/', function (req, res) {
  res.send('Hello World!');
});

// /user 节点接受 PUT 请求
// 地址为http://localhost:3000/user
app.get('/user', function (req, res) {
  res.send('user');
});

// 监听3000端口
var server = app.listen(3000, function () {
	console.log("视图跳转请打开  http://localhost:3000/test.html")
	console.log("pages解析请打开  http://localhost:3000/test2.html")
});

app.get("/ajax/page", function(req, res){
	res.send({data:'errno',page:1});
})
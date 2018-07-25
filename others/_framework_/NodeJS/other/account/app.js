﻿
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var util=require('util');

var routes = require('./routes');
//var User = require('./modules/user.js');	
var settings=require('./Settings');

var MongoStore = require('connect-mongo')(express);
var flash = require('connect-flash');

var app = express();

// all environments
app.set('port', process.env.PORT || 8484);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.bodyParser());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser());
app.use(flash());
app.use(express.session({
	"secret":settings.cookieSecret,
	"store":new MongoStore({
		db:settings.db
	})
}));

app.use(function(req, res, next){
  console.log("访问地址："+req.originalUrl);
  var url = req.originalUrl;
  
  //简单地定义一个登录拦截器
  if ((url == "/month" || url=="/stat" || url=='/list' || url=='/record') && !req.session.user) {
  	  console.log("登录拦截器提示：必须登录，才能执行此项操作。");
  	  req.flash('error', '请先登录。');
      return res.redirect("/login");
  }
  
  res.locals.user = req.session.user;
  
  var error = req.flash('error');
  res.locals.error = error.length?error:null;
  //console.log("转移flash中的error值："+error);
  
  var success = req.flash('success');
  res.locals.success = success.length?success:null;
  //console.log("转移flash中的success值："+success);
  
  res.locals.session = req.session;
  next();
});

app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
//console.log(util.inspect(app));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//console.log('注册路由.');

routes(app);


http.createServer(app).listen(app.get('port'), function(){
	console.log();
	console.log();
	console.log('/**************************************************/');
	console.log('/*  我的第一个NODE.JS例子。BY 隔壁老王 2014-3-29  */');
	console.log('/*   欢迎访问我的博客：http://wallimn.iteye.com   */');
	console.log('/**************************************************/');
  	console.log('============服务启动成功，监听端口：' + app.get('port')+"============");
});

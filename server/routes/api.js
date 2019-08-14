var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var DB_URL = 'mongodb://localhost:27017/'; //web

/* GET home page. */
router.get('/', function(req, res, next) {
	var result = req.body;
	console.log("get>>"+result);
  res.render('index', { title: 'Express' });
});
router.post('/',function(req,res) {
	
	// res.header("Access-Control-Allow-Origin", "*"); 
	// res.header("Access-Control-Allow-Credentials", true);
	// res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	// res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	
 // var result = req.body;
	//console.log("post>>"+JSON.stringify(req.body));
	console.log(res+"post>>"+JSON.stringify(req.body));
  //res.json(req);
	//res.send("success");
	switch (req.body.api_method){
		case "api_admin_create":
			apiAdminCreate(req,res);
			break;
		case "api_admin_login":
				MongoClient.connect(DB_URL, { useNewUrlParser: true }, function(err, db) {
					if (err) throw err;
					console.log(res+"数据库已连接!"+req.body.api_method);	
					var dbase = db.db("web");
					console.log("dbase:>>"+dbase);					
					//var myobj = { name: req.body.username, tel:req.body.tel ,info:req.body.info };
					var whereStr={username:req.body.username,password:req.body.password};
					dbase.collection("users").find(whereStr).toArray(function(err, result) {
							if (err) {
								throw err;
							}else{
								if(!result||result.length==0){
									res.send("fail");
								}else{
									res.send(result);
								}
							}
							console.log(result.length,"result>>",result);
							db.close();
							
					});
				});
			break;
		case "api_get":
				MongoClient.connect(DB_URL, { useNewUrlParser: true }, function(err, db) {
					if (err) throw err;
					console.log(res+"数据库已连接!"+req.body.api_method);	
					var dbase = db.db("web");
					console.log("dbase:>>"+dbase);					
					var myobj = { name: req.body.name, tel:req.body.tel ,info:req.body.info };
					var whereStr={};
					dbase.collection("agent").find(whereStr).toArray(function(err, result) {
							if (err) {
								throw err;
								
							}else{
								res.send(result);
							}
							console.log(result);
							db.close();
							
					});
				});

		return;
			mongoConnect(req.body.api_method,function(dbase){
				var dbase = db.db("web");
				var whereStr={};
				dbase.collection("contract").find(whereStr).toArray(function(err, result) {
					if(err)
					{
						console.log('Error:'+ err);
						return;
					}     
					console.log("result查找列表》》",result);
					db.close();
					res.send("success");
				});	
			})

			break;
		case "api_insert":
			MongoClient.connect(DB_URL, { useNewUrlParser: true }, function(err, db) {
				if (err) throw err;
				console.log(res+"数据库已连接!"+req.body.api_method);	
				var dbase = db.db("web");
				console.log("dbase:>>"+dbase);
				console.log("集合存在否"+dbase.collection("contract"));
				// dbase.createCollection('contract', function (err, res) {
				// 		if (err) throw err;
				// 		console.log("创建集合!");
				// 		db.close();
				// });
				
				var myobj = { name: req.body.name, tel:req.body.tel ,info:req.body.info };
				dbase.collection("agent").insertOne(myobj, function(err, result) {
				    if (err) throw err;
				    console.log(result.ops+"数据插入成功"+req.body.api_method);
				    db.close();
						res.send("success");
				});
			});
			console.log("req.body.api_method>>>>>>");
			//res.send("success");
			return;
			dbInsert(req.body);
			//,function(){res.send("success");}
			break;
		default:
			break;
	}
		
	
	
});
var apiAdminCreate=function(req,res){
	console.log("apiAdminCreate>>.")
	mongoConnect(function(db){
		var dbase = db.db("web");
		console.log("dbase:>>"+dbase);					
		var myobj={username:"admin",password:"518588"};
		dbase.collection("users").insertOne(myobj, function(err, result) {
		    if (err) throw err;
		    console.log(result.ops+"数据插入成功"+req.body.api_method);
		    db.close();
				res.send("success");
		});
	})
}
var mongoConnect=function(callback){
	MongoClient.connect(DB_URL, { useNewUrlParser: true }, function(err, db) {
		if (err) throw err;
		console.log("数据库已连接!");	
		callback(db);
	})	
}

var dbInsert=function(postData){
	console.log("dbInsert"+postData);
	MongoClient.connect(DB_URL, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
		console.log("shu'ju'k数据库连接"+postData);
    var dbo = db.db("web");
		console.log("dbo"+dbo);
    // var myobj = { name: postData.name, tel:postData.tel ,info:postData.info };
    // dbo.collection("contract").insertOne(myobj, function(err, res) {
    //     if (err) throw err;
    //     console.log("数据插入成功");
    //     db.close();
    // });
	});
}

module.exports = router;

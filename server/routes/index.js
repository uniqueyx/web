var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var result = req.body;
	console.log("get>>"+result);
  res.render('index', { title: 'Express' });
});
router.post('/post',function(req,res) {
 // var result = req.body;
	//console.log("post>>"+JSON.stringify(req.body));
	console.log("post>>"+req.body.first_name);
  //res.json(req);
	res.send("success");
});

module.exports = router;

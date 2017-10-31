var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : 'gqq123..',
  database : 'ktlx1030'
});

/* GET home page. */


 router.get('/list', function(req, res, next) {
   connection.query('SELECT * FROM ktlx', function(err, rows, fields) {
   	res.header("Access-Control-Allow-Origin","*")
   	res.send(rows)
 });
 });
router.post('/detail', function(req, res, next) {
	var n=req.body.id;
  connection.query("SELECT data FROM ktlx where id="+n, function(err, rows, fields) {
  	res.header("Access-Control-Allow-Origin","*");
        res.send(rows)
});
});


router.post('/delete', function(req, res, next) {
  res.header("Access-Control-Allow-Origin","*");
  var n=req.body.id;
  console.log(n)
  connection.query('DELETE FROM ktlx WHERE id='+n+'', function(err, rows, fields) {
    
        res.send('删除成功')
});
});
module.exports = router;

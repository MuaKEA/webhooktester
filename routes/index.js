// var express = require('express');
// var router = express.Router();
//
// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
//   var Stringtest =
// });
//
//
//
// module.exports = router;

var fs = require("fs");

fs.readFile("jsonReqest.txt", function(err, buf) {
  var response1  =  JSON.stringify(buf.toString("Utf-8"));
  var Jsonobject = JSON.parse(response1);
  var myJson = {'hello':'world'};
  var js = JSON.parse(myJson);
  console.log(ty)


});

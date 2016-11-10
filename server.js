var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));
app.listen(2222, function(){
	console.log("listen:2222");
});
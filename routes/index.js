var express = require('express');
var app = express.Router();


/////////////////////////////////////////////////////////
/////////////////// routing functions ///////////////////
/////////////////////////////////////////////////////////

app.get('/', function(req, res) {
	res.render('index');
});



module.exports = app;



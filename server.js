var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = 8002;

app.listen(port);

var messages = [];

app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods, OPTIONS, GET, POST');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
})

app.use(bodyParser.json());

app.get('/', function(req, res) {
	res.send(JSON.stringify(messages));
})

app.post('/', function(req, res){
	messages.push(req.body);
	res.send(JSON.stringify(messages));
})





// var onRequest = function (req, res) {
// 	if (req.method === 'GET') {
// 		res.writeHead(200, {
// 		  'Connection': 'close',
// 		  'Content-Type': 'application/json',
// 		  'Access-Control-Allow-Origin': '*'
// 		});
// 	res.end(JSON.stringify(messages));
// 	}	

// 	if (req.method === 'POST') {
// 		res.writeHead(200, {
// 			'Connection': 'close',
// 		  	'Content-Type': 'application/json',
// 		  	'Access-Control-Allow-Origin': '*'
// 		});
// 		var postData = '';
// 		req.on('data', function (chunk) {
// 			postData += chunk.toString();
// 		});
// 		req.on('end', function() {
// 			console.log("Got POST data:");
// 			console.log(JSON.parse(postData));
// 			messages.push(JSON.parse(postData));
// 			res.end(postData);

// 		})
	
// 		res.end(JSON.stringify(messages));

// 	} 
  
// }

// var http = require('http');
// http.createServer(onRequest).listen(8002);
// var messages= ['something', 'something else'];

// console.log(messages);


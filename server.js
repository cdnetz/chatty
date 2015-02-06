
var onRequest = function (req, res) {
	if (req.method === 'GET') {
		res.writeHead(200, {
		  'Connection': 'close',
		  'Content-Type': 'application/json',
		  'Access-Control-Allow-Origin': '*'
		});
	res.end(JSON.stringify(messages));
	}	

	if (req.method === 'POST') {
		res.writeHead(200, {
			'Connection': 'close',
		  	'Content-Type': 'application/json',
		  	'Access-Control-Allow-Origin': '*'
		});
		var postData = '';
		req.on('data', function (chunk) {
			postData += chunk.toString();
		});
		req.on('end', function() {
			console.log("Got POST data:");
			console.log(JSON.parse(postData));
			messages.push(JSON.parse(postData));
			res.end(postData);

		})
	
		res.end(JSON.stringify(messages));

	}
  
}

var http = require('http');
http.createServer(onRequest).listen(8002);
var messages= ['something', 'something else'];

console.log(messages);


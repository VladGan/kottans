var map = require('through2-map');
var http = require('http');

var portNumber = Number(process.argv[2]);

var server = http.createServer(function(req,res){
	req.pipe(map(function (chunk) {
		return chunk.toString().toUpperCase();
	})).pipe(res);
});
server.listen(portNumber);


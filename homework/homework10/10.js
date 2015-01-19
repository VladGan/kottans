var fs = require('fs');
var http = require('http');

var portNumber = Number(process.argv[2]);

var server = http.createServer(function(req,res){
	var readStream = fs.createReadStream(process.argv[3]);
	readStream.pipe(res);
});
server.listen(portNumber);
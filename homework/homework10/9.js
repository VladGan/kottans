var net = require('net');
function zero(i){
	if(i < 10) return '0'+i;
	else
		return ''+i;
}

var server = net.createServer(function(socket){
	var date = new Date();
	var month = (date.getMonth()+1).toString();
	if (month.length === 1)
		month = "0"+month;
	var string = date.getFullYear() + '-' + zero(date.getMonth() + 1) + '-' + zero(date.getDate()) + ' ' + zero(date.getHours()) + ':'
 + zero(date.getMinutes());

	socket.end(string+'\n');
});
server.listen(process.argv[2]);
var http = require("http");

var string1="";
var string2="";
var string3="";
var number = 0;

http.get(process.argv[2],function(response){
	response
	.on('data',function(data){
		string1 = string1.concat(data);})
	.on('end',function(){
		number++;
		if (number === 3) console.log(string1+'\n'+string2+'\n'+string3);
	})
	.setEncoding('utf8');
});

http.get(process.argv[3],function(response){
	response
	.on('data',function(data){
		string2 = string2.concat(data);})
	.on('end',function(){
		number++;
		if (number === 3) console.log(string1+'\n'+string2+'\n'+string3);
	})
	.setEncoding('utf8');
});

http.get(process.argv[4],function(response){
	response
	.on('data',function(data){
		string3 = string3.concat(data);})
	.on('end',function(){
		number++;
		if (number === 3) console.log(string1+'\n'+string2+'\n'+string3);
	})
	.setEncoding('utf8');
});
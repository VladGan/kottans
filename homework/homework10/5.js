var fs = require("fs");
var path = require('path');

fs.readdir(process.argv[2],function(err,list){
	list.map(function(el){
		if (path.extname(el) === ("."+process.argv[3])){
			console.log(el);
		}
	});
});


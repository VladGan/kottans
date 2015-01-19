module.exports = function(name,extension,callback){
	var fs = require("fs");
	var path = require('path');
	var result = [];

	fs.readdir(name,function(err,list){
		if (err) return callback(err);

		list.map(function(el){
			if (path.extname(el) === "."+extension){
				result.push(el);
			}
		});

		return callback(null, result);
	});
};

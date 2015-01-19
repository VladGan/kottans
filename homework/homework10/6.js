var fn= require("./6_module");

fn(process.argv[2],process.argv[3],function(err, list){
	if (err) return console.log("error: ",err);

	list.map(function (el) {
		console.log(el);
	});
});
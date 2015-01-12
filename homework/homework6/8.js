function duckCount() {
	var ans = 0;
	object = new Object();
	var args = Array.prototype.slice.call(arguments);
	args.map(function (el){
		if (Object.hasOwnProperty.call(el,'quack') === true)
			ans++;
	});
	return ans;
}
module.exports = duckCount;

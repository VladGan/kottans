module.exports = function arrayMap(arr, fn) {
	return arr.reduce(function(previousValue, currentValue, index, array) {
		return previousValue.concat(fn(currentValue, index, array));
	}, []);
};

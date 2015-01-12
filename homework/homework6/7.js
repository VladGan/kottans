function reduce(arr, fn, initial) {
	function a(index, value) {
		if (index > arr.length - 1) return value;
		return a(index + 1, fn(value, arr[index], index, arr));
	}
	return a(0, initial);
}
module.exports = reduce;

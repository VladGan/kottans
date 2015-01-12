function a(words)
{
	var ans = [];ans[0] = {word : words[0], val : 0};
	var q = {};
	(words.reduce(function(previousValue, currentValue, index, array) {
		var q = previousValue.every(function (el,ind){
			if (el.word === currentValue) el.val++;
			return (el.word !== currentValue);
		});
		if (q)
			previousValue.push({word:words[index],val:1});
		return previousValue;
	},ans)).map(function(el){
		q[el.word]=el.val;
	});
	return q;
}

module.exports = a;
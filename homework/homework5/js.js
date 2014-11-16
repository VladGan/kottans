function start ()
	{
		var deepCopy = function w(a)
		{
			if (null === a || ("object" != typeof a)) return a;
			var newObj = (a instanceof Array) ? [] : (a instanceof Object) ? {} : new Date();
			for (var i in a) {
				if (a[i] && (typeof a[i] == 'object')) {
				newObj[i] = w(a[i]);
				}
					else newObj[i] = a[i];
			} return newObj;
		};
		var a = 12,b = deepCopy(a);
		console.log(b);
	}
function a(goodUsers)
{
	return function (chekUsers) {
		return chekUsers.every(function (element) {
			return goodUsers.some(function (el){
				return el.id === element.id;
			});
		});
	};
}

module.exports = a;
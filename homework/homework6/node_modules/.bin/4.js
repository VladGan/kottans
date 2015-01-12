function a(numbers)
{
	return (numbers.filter(function q(element){return element.message.length<50;})).map(function (num){return num.message;});
}

module.exports = a;
function a(b,num){
	if (num>0)
	{
		b();
		return a(b,num-1);
	}
}

module.exports = a;
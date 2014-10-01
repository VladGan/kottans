function det(w)//вычисление определителей миноров (матриц 3х3)
	{
		var ans = 0;

		for (var i = 0; i<3; i++)
		{
			var l = 0;
			var k = i;
			var current_d = 1;
			for (var j = 0; j<3; j++)
			{
				current_d *= w[l][k];
				l++;
				k++;
				k %=3;
			}
			ans+= current_d;
		}

		for (var i = 0; i<3; i++)
		{
			var l = 0;
			var k = 2-i;
			var current_d = 1;
			for (var j = 0; j<3; j++)
			{
				current_d *= w[l][k];
				l++;
				k--;
				if (k==-1) k=2;
			}
			ans-= current_d;
		}
		return (ans);
	}

function minor(w,i)//генерация миноров
{
	var k = 0, l = 0;
	var arr = new Array(3);
	for (var p = 0; p < 3; p++) 
		arr[p] = new Array(3);
	for (var t = 0; t<4; t++)
		for (var y = 0; y<4; y++)
			if (t!=0 && y!=i)
			{
				arr[k][l] = w[t][y];
				l++;
				if (l == 3)
				{
					k++;
					l=0;
				}
			}
	return det(arr);
}
function determinant(w)
{
	var ans = 0;
	for (var i = 0; i<4; i++)
		ans += Math.pow(-1, i) * minor(w,i) * w[0][i];//поиск детерминанта путём разложения по первой строке
	return (ans != 0)
}
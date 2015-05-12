function fill(i)
{
	if (i == 1)//тест из условия
	{
		document.getElementById("0_0").value = 0;
		document.getElementById("0_1").value = 1;
		document.getElementById("0_2").value = 3;
		document.getElementById("0_3").value = 2;
			document.getElementById("answer_0").value = -1;
		document.getElementById("1_0").value = 1000;
		document.getElementById("1_1").value = 3;
		document.getElementById("1_2").value = 1;
		document.getElementById("1_3").value = -5;
			document.getElementById("answer_1").value = -2;
		document.getElementById("2_0").value = -3;
		document.getElementById("2_1").value = 4;
		document.getElementById("2_2").value = 1;
		document.getElementById("2_3").value = 4;
			document.getElementById("answer_2").value = -1;
		document.getElementById("3_0").value = 4;
		document.getElementById("3_1").value = 0;
		document.getElementById("3_2").value = -2;
		document.getElementById("3_3").value = -3;
			document.getElementById("answer_3").value = 4;
	}
	if (i == 2)// http://www.wolframalpha.com/input/?i=solve+1*y+%2B+3*z%2B+2*t%3D+-1%3B+3*x%2B+3*y%2B+z-+5*t%3D+-2%3B+6*x%2B+6*y%2B+2*z%2B+-10*t%3D+-1%3B+4*x-+2*z-+3*t%3D+4
	{
		document.getElementById("0_0").value = 0;
		document.getElementById("0_1").value = 1;
		document.getElementById("0_2").value = 3;
		document.getElementById("0_3").value = 2;
			document.getElementById("answer_0").value = -1;
		document.getElementById("1_0").value = 3;
		document.getElementById("1_1").value = 3;
		document.getElementById("1_2").value = 1;
		document.getElementById("1_3").value = -5;
			document.getElementById("answer_1").value = -2;
		document.getElementById("2_0").value = 6;
		document.getElementById("2_1").value = 6;
		document.getElementById("2_2").value = 2;
		document.getElementById("2_3").value = -10;
			document.getElementById("answer_2").value = -1;
		document.getElementById("3_0").value = 4;
		document.getElementById("3_1").value = 0;
		document.getElementById("3_2").value = -2;
		document.getElementById("3_3").value = -3;
			document.getElementById("answer_3").value = 4;
	}
	if (i == 3)// заполнение рандомом
	{
		document.getElementById("0_0").value = Math.random() * 20 - 10;
		document.getElementById("0_1").value = Math.random() * 20 - 10;
		document.getElementById("0_2").value = Math.random() * 20 - 10;
		document.getElementById("0_3").value = Math.random() * 20 - 10;
			document.getElementById("answer_0").value =  Math.random() * 20 - 10;
		document.getElementById("1_0").value =  Math.random() * 20 - 10;
		document.getElementById("1_1").value = Math.random() * 20 - 10;
		document.getElementById("1_2").value = Math.random() * 20 - 10;
		document.getElementById("1_3").value = Math.random() * 20 - 10;
			document.getElementById("answer_1").value =  Math.random() * 20 - 10;
		document.getElementById("2_0").value = Math.random() * 20 - 10;
		document.getElementById("2_1").value = Math.random() * 20 - 10;
		document.getElementById("2_2").value = Math.random() * 20 - 10;
		document.getElementById("2_3").value = Math.random() * 20 - 10;
			document.getElementById("answer_2").value =  Math.random() * 20 - 10;
		document.getElementById("3_0").value = Math.random() * 20 - 10;
		document.getElementById("3_1").value = Math.random() * 20 - 10;
		document.getElementById("3_2").value = Math.random() * 20 - 10;
		document.getElementById("3_3").value = Math.random() * 20 - 10;
			document.getElementById("answer_3").value = Math.random() * 20 - 10;
	}

	if (i == 4)// символ вместо числа
		{
		document.getElementById("0_0").value = Math.random() * 20 - 10;
		document.getElementById("0_1").value = Math.random() * 20 - 10;
		document.getElementById("0_2").value = Math.random() * 20 - 10;
		document.getElementById("0_3").value = Math.random() * 20 - 10;
			document.getElementById("answer_0").value =  Math.random() * 20 - 10;
		document.getElementById("1_0").value =  Math.random() * 20 - 10;
		document.getElementById("1_1").value = Math.random() * 20 - 10;
		document.getElementById("1_2").value = Math.random() * 20 - 10;
		document.getElementById("1_3").value = Math.random() * 20 - 10;
			document.getElementById("answer_1").value =  Math.random() * 20 - 10;
		document.getElementById("2_0").value = "!!fg";
		document.getElementById("2_1").value = Math.random() * 20 - 10;
		document.getElementById("2_2").value = Math.random() * 20 - 10;
		document.getElementById("2_3").value = Math.random() * 20 - 10;
			document.getElementById("answer_2").value =  Math.random() * 20 - 10;
		document.getElementById("3_0").value = Math.random() * 20 - 10;
		document.getElementById("3_1").value = Math.random() * 20 - 10;
		document.getElementById("3_2").value = Math.random() * 20 - 10;
		document.getElementById("3_3").value = Math.random() * 20 - 10;
			document.getElementById("answer_3").value = Math.random() * 20 - 10;
	}

	if (i == 5)// слишком большое число в плане записи
	{
		document.getElementById("0_0").value = Math.random() * 20 - 10;
		document.getElementById("0_1").value = Math.random() * 20 - 10;
		document.getElementById("0_2").value = Math.random() * 20 - 10;
		document.getElementById("0_3").value = Math.random() * 20 - 10;
			document.getElementById("answer_0").value =  Math.random() * 20 - 10;
		document.getElementById("1_0").value =  Math.random() * 20 - 10;
		document.getElementById("1_1").value = Math.random() * 20 - 10;
		document.getElementById("1_2").value = Math.random() * 20 - 10;
		document.getElementById("1_3").value = Math.random() * 20 - 10;
			document.getElementById("answer_1").value =  898849834232332434298439;
		document.getElementById("2_0").value = Math.random() * 20 - 10;
		document.getElementById("2_1").value = Math.random() * 20 - 10;
		document.getElementById("2_2").value = Math.random() * 20 - 10;
		document.getElementById("2_3").value = Math.random() * 20 - 10;
			document.getElementById("answer_2").value =  Math.random() * 20 - 10;
		document.getElementById("3_0").value = Math.random() * 20 - 10;
		document.getElementById("3_1").value = Math.random() * 20 - 10;
		document.getElementById("3_2").value = Math.random() * 20 - 10;
		document.getElementById("3_3").value = Math.random() * 20 - 10;
			document.getElementById("answer_3").value = Math.random() * 20 - 10;
	}

	if (i == 6)// слишком большое число в плане размерности
	{
		document.getElementById("0_0").value = Math.random() * 20 - 10;
		document.getElementById("0_1").value = 23e435;
		document.getElementById("0_2").value = Math.random() * 20 - 10;
		document.getElementById("0_3").value = Math.random() * 20 - 10;
			document.getElementById("answer_0").value =  Math.random() * 20 - 10;
		document.getElementById("1_0").value =  Math.random() * 20 - 10;
		document.getElementById("1_1").value = Math.random() * 20 - 10;
		document.getElementById("1_2").value = Math.random() * 20 - 10;
		document.getElementById("1_3").value = Math.random() * 20 - 10;
			document.getElementById("answer_1").value =  Math.random() * 20 - 10;
		document.getElementById("2_0").value = Math.random() * 20 - 10;
		document.getElementById("2_1").value = Math.random() * 20 - 10;
		document.getElementById("2_2").value = Math.random() * 20 - 10;
		document.getElementById("2_3").value = Math.random() * 20 - 10;
			document.getElementById("answer_2").value =  Math.random() * 20 - 10;
		document.getElementById("3_0").value = Math.random() * 20 - 10;
		document.getElementById("3_1").value = Math.random() * 20 - 10;
		document.getElementById("3_2").value = Math.random() * 20 - 10;
		document.getElementById("3_3").value = Math.random() * 20 - 10;
			document.getElementById("answer_3").value = Math.random() * 20 - 10;
	}
}
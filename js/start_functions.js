var start_matrix,start_ans,index = new Array(4);

(function() {//добавление обработчика событий на кнопки
	document.getElementById("button").addEventListener("click", function () {solve()});
	document.getElementById("example_1").addEventListener("click", function () {fill(1);solve();});
	document.getElementById("example_2").addEventListener("click", function () {fill(2);solve();});
	document.getElementById("example_3").addEventListener("click", function () {fill(3);solve();});
	document.getElementById("example_4").addEventListener("click", function () {fill(4);solve();});
	document.getElementById("example_5").addEventListener("click", function () {fill(5);solve();});
	document.getElementById("example_6").addEventListener("click", function () {fill(6);solve();});
})();

function write(s)//вывод строки s в cout (в ответ)
{
	document.getElementById("cout").innerHTML += s; 
	console.log(s);
}

function solve() { //считывание начальных данных, запуск основной функции
	document.getElementById("cout").innerHTML = '<div class = "all_matrix" id = "all_m"></div>';//обнуление ответа
	var w = new Array(4);
	var answer = new Array(4);

	for (var i = 0; i < 4; i++) 
		index[i] = i+1;

	for (var i = 0; i < 4; i++) 
		w[i] = new Array(4);

	for (var i = 0; i < 4; i++)
	{
		var id;
		for (var j = 0; j < 4; j++)
		{
			id = (i).toString() + "_" + (j).toString();

			if (isNaN(document.getElementById(id).value))
			{
				mistake(i,j,"is not a number","A<sub>"+(i+1).toString() + " " + (j+1).toString() + "</sub> ");
				return;
			}

			if (parseFloat(document.getElementById(id).value).toFixed(2).length > 19)
			{
				mistake(i,j,"has too many symbols","A<sub>"+(i+1).toString() + " " + (j+1).toString() + "</sub> ");
				return;
			}

			if (Math.abs(parseFloat(document.getElementById(id).value)) == Infinity)
			{
				mistake(i,j,"is too large","A<sub>"+(i+1).toString() + " " + (j+1).toString() + "</sub> ");
				return;
			}

			w[i][j] = parseFloat(document.getElementById(id).value);
			if (!w[i][j])
				w[i][j] = 0;
		}

		id = "answer_" + (i).toString();
		if (isNaN(document.getElementById(id).value))
			{
				mistake(i,j,"is not a number","B<sub>"+(i+1).toString()+"</sub> ");
				return;
			}

			if (parseFloat(document.getElementById(id).value).toFixed(2).length > 19)
			{
				mistake(i,j,"has too many symbols","B<sub>"+(i+1).toString()+"</sub> ");
				return;
			}

			if (Math.abs(parseFloat(document.getElementById(id).value)) == Infinity)
			{
				mistake(i,j,"is too large","B<sub>"+(i+1).toString()+"</sub> ");
				return;
			}

		answer[i] = parseFloat(document.getElementById(id).value);
		if (!answer[i]) answer[i] = 0;
	}

	start_matrix = new Array(4);
	for (var i = 0; i < 4; i++) 
		start_matrix[i] = new Array(4);
	for (var i = 0; i < 4; i++) 
		for (var j = 0; j < 4; j++) 
			start_matrix[i][j] = w[i][j];

	start_ans = new Array(4);
	for (var i = 0; i < 4; i++) 
		start_ans[i] = answer[i];


	GaussMethod(w,answer);
	document.getElementById("cout").style.display="block";
}

function make_column(i,w,answer) {
	var max = 0, max_j, max_k;

	for (var j = i; j < 4; j++)
		for (var k = i; k < 4; k++)
			if (Math.abs(w[j][k])>=max)
			{
				max = Math.abs(w[j][k]);
				max_j = j;
				max_k = k;
			}

	var tmp = w[i];
	w[i] = w[max_j];
	w[max_j] = tmp;

	tmp = answer[i];
	answer[i] = answer[max_j];
	answer[max_j] = tmp;

	for (var j = 0; j<4; j++)
	{
		tmp = w[j][i];
		w[j][i] = w[j][max_k];
		w[j][max_k] = tmp;
	}

	tmp = index[i];
	index[i] = index[max_k];
	index[max_k] = tmp;


	for (var j = i+1; j<4; j++)
	{
		if (w[j][i]!=0){
			var kof = w[j][i]/w[i][i];
			for (k = i; k<4; k++)
				w[j][k] = (w[j][k] - w[i][k] * kof);
			answer[j] -= answer[i] * kof;
		}
	}
}


function GaussMethod(w,answer) {//решение СЛАУ методом Гаусса с выбором основного элемента
	if (determinant(w)) //единственное решение существует только в случае если детерминант не равен 0
	{
		for (var i = 0; i < 4; i++)
		{
			print_matrix(w,i != 3,answer);//вывод матрицы 
			make_column(i,w,answer);//поиск максимального элемента, замена текущего рядя на максимальный, обнуление нижних элементов
		}
		var x = print_solutions(w,answer);//вывод неизвестных
		print_answers(x);//вывод матрицы Х
		print_E(x);//вывод матрицы Е (проверка на правильность решения)
	}
	else
		write("<span class = 'equation'>determinant vanishes. no solution</span>");
}





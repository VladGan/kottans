var start_matrix,start_ans;
window.onload = function() {start();}

function start()//добавление обработчика событий на кнопки
{
	document.getElementById("button").addEventListener("click", function () {solve()});
	document.getElementById("example_1").addEventListener("click", function () {fill(1);solve();});
	document.getElementById("example_2").addEventListener("click", function () {fill(2);solve();});
	document.getElementById("example_3").addEventListener("click", function () {fill(3);solve();});
}

function write(s)//вывод строки s в cout (в ответ)
{
	document.getElementById("cout").innerHTML += s; 
}

function solve() { //считывание начальных данных, запуск основной функции
	document.getElementById("cout").innerHTML = '<div class = "all_matrix" id = "all_m"></div>';//обнуление ответа
	var w = new Array(4);
	var answer = new Array(4);
	for (var i = 0; i < 4; i++) 
		w[i] = new Array(4);

	for (var i = 0; i < 4; i++)
	{
		var id;
		for (var j = 0; j < 4; j++)
		{
			id = (i).toString() + "_" + (j).toString();
			w[i][j] = parseFloat(document.getElementById(id).value);
			if (!w[i][j])
				w[i][j] = 0;
		}
		id = "answer_" + (i).toString();
		answer[i] = parseFloat(document.getElementById(id).value);
		if (!answer[i]) answer[i] = 0;
	}
	start_matrix = w;
	start_ans = answer;
	GaussMethod(w,answer);
	document.getElementById("cout").style.display="block";
}

function make_column(i,w,answer) {
	var max = 0, max_j;

	for (j = i; j < 4; j++)
		if (Math.abs(w[j][i])>=max)
		{
			max = Math.abs(w[j][i]);
			max_j = j;
		}

	var tmp = w[i];
	w[i] = w[max_j];
	w[max_j] = tmp;
	var tmp = answer[i];
	answer[i] = answer[max_j];
	answer[max_j] = tmp;
	for (j = i+1; j<4; j++)
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
	if (determinant(w)) //единственное решение существует только в случае если детерминант равено 0
	{
		for (var i = 0; i < 4; i++)
		{
			print_matrix(w,i != 3,answer);//вывод матрицы 
			make_column(i,w,answer);//поиск максимального элемента, замена текущего рядя на максимальный, обнуление нижних элементов
		}
		var x = print_solutions(w,answer);//вывод неизвестных
		print_answers(x);//вывод матрицы Х
		print_E(x);//вывод матрицы Е
	}
	else
		write("<span class = 'equation'>determinant vanishes. no solution</span>");
}





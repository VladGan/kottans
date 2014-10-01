var start_matrix,start_ans;
window.onload = function() {start();}

function start()
{
	document.getElementById("button").addEventListener("click", function () {solve()});
	document.getElementById("example_1").addEventListener("click", function () {fill(1);solve();});
}

function solve() {
	document.getElementById("cout").innerHTML = '<div class = "all_matrix" id = "all_m"></div>';
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

function GaussMethod(w,answer) {
	if (determinant(w))
	{
		for (var i = 0; i < 4; i++)
		{
			print_matrix(w,i != 3,answer);
			make_column(i,w,answer);
		}
		var x = print_solutions(w,answer);
		print_answers(x);
		print_E(x);
	}
	else
		write("<span class = 'equation'>determinant vanishes. no solution</span>");
	/*var width = document.getElementById('all_m').offsetWidth;
	document.getElementById('sol').onload = function () {
		document.getElementById('sol').style.width = width;
	};
	document.getElementById('e_mas').style.width = width;*/
}


function write(s)
{
	document.getElementById("cout").innerHTML += s;
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




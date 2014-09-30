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

function write(s)
{
	document.getElementById("cout").innerHTML += s;
}
function print_solutions(w,answer)
{
	var string = '<div class = "solutions" id = "sol">';
	var x = new Array(4);
	for (var i=3; i>=0; i--)
	{
		var sum = 0;
		var sum_string = '';
		string += '<span class="solution"> X<sub>'+(i+1).toString()+ '</sub> = ';
		for (var j = i+1; j<4; j++)
		{
			sum+=w[i][j]*x[j];
			if (j<3)
				sum_string+=w[i][j].toFixed(2).toString() + "*x" + "<sub>"+(j+1).toString()+"</sub>" + "+";
			else
				sum_string+=w[i][j].toFixed(2).toString() + "*x" + "<sub>"+(j+1).toString()+"</sub>";
		}
		x[i] = (answer[i] - sum) / w[i][i];
		if (i!=3)
			string+= "(" + answer[i].toFixed(2).toString()+" - ("+sum_string + ")) / " + w[i][i].toFixed(2).toString();
		else
			string+= "(" + answer[i].toFixed(2).toString()+ ") / " + w[i][i].toFixed(2).toString();
		string+=" = "+x[i].toFixed(2).toString();
		string+="</span>";
	}
	string += "</div>";
	write(string);
	return x;
}
function print_matrix(w,q,answer)
{
	var string = '';
	string += "<img src = 'img/bracket_l.png' >";
	string += "<div class='matrix'>";
	string += "<div class='equations'>";
	for (var i = 0; i<4; i++)
	{
		var was = false;
		string +="<span class = 'equation'>";
		for (var j = 0; j<4; j++)
			if ((Math.abs(w[i][j]).toFixed(2))%1 == 0)
			{
				if (Math.abs(w[i][j]).toFixed(2) == -0)
					string += "<span class = 'variable'>" + (Math.abs(w[i][j])).toFixed(0).toString() + "</span>";
				else
					string += "<span class = 'variable'>" + (w[i][j]).toFixed(0).toString() + "</span>";
			}
			else
				string+= "<span class = 'variable'>"+w[i][j].toFixed(2).toString() + "</span>";
		string += "<span class = 'variable'>";
		if ((Math.abs(answer[i]).toFixed(2))%1 == 0)
			{
				if (Math.abs(answer[i]).toFixed(2) == -0) answer[i] = 0;
				string += (answer[i]).toFixed(0).toString();
			}
			else
				string+= answer[i].toFixed(2).toString();
		string+="</span>";
		string +="</span>";
	}
	string += "</div>";
	string += "<img src = 'img/vertical_bracket.png' style='height:90px; left:-30px;'>";
	string += "</span>";
	string += "</div>";
	string += "<img src = 'img/bracket_r.png' >";
	if (q)
		string+="<span class = 'tilda'>&approx;</span>";
	document.getElementById("all_m").innerHTML += string;
}
	
function print_answers(x)
{
	var string = '<div class = "answer_matrix" id = "ans_mas"><span class = "answer_x">X = </span>';
	string += "<img src = 'img/bracket_l.png' style = 'padding-left:35px;'>";
	string += "<div class='matrix'>";
	string += "<div class='equations'>";
	for (var i = 0; i<4; i++)
	{
		var was = false;
		string +="<span class = 'equation'>";
		string += "<span class = 'variable' style = 'padding: 0px 20px 0px 0px;'>" + (x[i]).toFixed(2).toString() + "</span>";
		string += "</span>";
	}
	string += "</div>";
	string += "</div>";
	string += "<img src = 'img/bracket_r.png' ></div>";
	document.getElementById("cout").innerHTML += string;
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
function print_E(x)
{
	var string = '<div class = "answer_matrix" id = "e_mas"><span class = "answer_x">E = </span>';
	string += "<img src = 'img/bracket_l.png' style = 'padding-left:35px;'>";
	string += "<div class='matrix'>";
	string += "<div class='equations'>";
	for (var i = 0; i<4; i++)
	{
		var was = false;
		var sum = 0;
		string +="<span class = 'equation'>";
		for (var j = 0; j<4; j++)
			sum += start_matrix[i][j] * x[j];
		var result = start_ans[i] - sum;
		string += "<span class = 'variable' style = 'padding: 0px 20px 0px 0px;'>" + (result).toFixed(2).toString() + "</span>";
		string += "</span>";
	}
	string += "</div>";
	string += "</div>";
	string += "<img src = 'img/bracket_r.png' ></div>";
	document.getElementById("cout").innerHTML += string;
}
function GaussMethod(w,answer) {
	//document.getElementById("cout").innerHTML = '';
	if (determinant(w))
	{
		for (var i = 0; i < 4; i++)
		{
			print_matrix(w,i != 3,answer);
			make_column(i,w,answer);
		}
		write("</div>");
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



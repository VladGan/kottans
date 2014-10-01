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
	string += "<img src = 'img/bracket_r.png' height ='92px' ></div>";
	document.getElementById("cout").innerHTML += string;
}
function print_E(x)
{
	var string = '<div class = "answer_matrix" id = "e_mas"><span class = "answer_x">E = </span>';
	string += "<img src = 'img/bracket_l.png' style = 'padding-left:35px;height:92px;'>";
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
	string += "<img src = 'img/bracket_r.png' height = '92px'' ></div>";
	document.getElementById("cout").innerHTML += string;
}
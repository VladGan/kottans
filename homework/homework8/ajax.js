var token;

$(document).ready(function() {

	$('small').hide();

	function GetFullInfo(){
		var adress = "http://api.sudodoki.name:8888/user/" + $(this).attr('id');
		$.ajax({
			type: "GET",
			url: adress,
			headers: {"SECRET-TOKEN": token},
			success:function(data){
				data = $.parseJSON(data);

				var name = "{PREFIX}. {NAME}, {LASTNAME}"
					.replace('{PREFIX}',FirstL(data[0].user.name.title))
					.replace('{NAME}', FirstL(data[0].user.name.first))
					.replace('{LASTNAME}', FirstL(data[0].user.name.last));

				var location = "Street: {STREET}, {CITY}, {STATE}, {ZIP}"
					.replace('{STREET}', FirstL(data[0].user.location.street))
					.replace('{CITY}', FirstL(data[0].user.location.city))
					.replace('{STATE}', FirstL(data[0].user.location.state))
					.replace('{ZIP}', data[0].user.location.zip);

				var email = '<a href="{EMAIL}">{EMAIL}</a>'
					.replace('{EMAIL}', data[0].user.email)
					.replace('{EMAIL}', data[0].user.email);

				var phone = '<a href="tel:{TEL}">{TEL}</a>'
					.replace('{TEL}',data[0].user.phone)
					.replace('{TEL}',data[0].user.phone);

				$('#show-full h2').html(name);
				$('#show-full .location').html(location);
				$('#show-full .adress').html(email);
				$('#show-full .tel').html(phone);
			}
		});
	}

	function ErrorHandler(xhr){
			$('small').hide();
			var i = 0;
			$('input').map(function(el){
				if($(el).attr('type') != "button") $(el).attr('class','error');
			});

			var jsonResponse = JSON.parse(xhr.responseText);

			var selector1 = 'input[name={error}]';
			var selector2 = 'small[name={error}]';

			if (jsonResponse.error) 
			{
				selector1 = selector1.replace('{error}','login');
				selector2 = selector2.replace('{error}','login');
				$($(selector1)[0]).attr('class','error');
				$($(selector2)[0]).html(jsonResponse.error).show();
			}
			else
			{
				$.each(jsonResponse.errors,function(ind,el)
				{
					selector1 = 'input[name={error}]';
					selector2 = 'small[name={error}]';

					selector1 = selector1.replace('{error}',Object.keys(el)[0]);
					selector2 = selector2.replace('{error}',Object.keys(el)[0]);

					$($(selector1)[1] || $(selector1)[0]).attr('class','error');
					$($(selector2)[1] || $(selector2)[0]).html(el[Object.keys(el)[0]]).show();
				});
			};
	}

	function DoneHandler(data){
		var dat = $.parseJSON(data);
		$('small').hide();
		for (var i = 0; i<$('input').length; i++){
			if($($('input')[i]).attr('type') != "button") $($('input')[i]).attr('class','');
		}
		token = dat.token;
		alert(dat.status);
	}


	function FirstL(string)
	{
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	function gen(el)
	{
		var template = "<li><div class='person {GENDER}'><a id='{ID}' class='url n' href='#show-full'><i>{GENDER-PREF}</i> {NAME}, {SURNAME}</a></div></li>";

		var gender = el.user.gender;
		var genderPref = (gender === "male" ? 'Mr.' : 'Mrs.');
		var name = FirstL(el.user.name.first);
		var id = FirstL(el.id);
		var surname = FirstL(el.user.name.last);

		var html = template. replace('{GENDER}', gender)
							.replace('{GENDER-PREF}', genderPref)
							.replace('{NAME}', name)
							.replace('{ID}', id)
							.replace('{SURNAME}', surname);
		return html;
	}

	$.get( "http://api.sudodoki.name:8888/users",function(data)
	{
		data.map(function(el){
			var html = gen(el);
			$('.small-block-grid-3').append(html);
		});
		$('#spinner1').hide();

		$('.url.n').click(GetFullInfo);
	});

	$('#button-login').click(function() 
	{
		var Login = $('#form1')[0][0].value;
		var Password = $('#form1')[0][1].value;
		$.post('http://api.sudodoki.name:8888/login',{ login: Login, password: Password})
		.done(DoneHandler)
		.error(ErrorHandler);
	});

	$('#button-signup').click(function() 
	{
		var Login =$('#form2')[0][0].value;
		var Password = $('#form2')[0][2].value;
		var PasswordConfirmation = $('#form2')[0][3].value;
		$.post('http://api.sudodoki.name:8888/signup ',{ login: Login, password: Password, passwordConfirmation: PasswordConfirmation})
		.done(DoneHandler)
		.error(ErrorHandler)
	});
});
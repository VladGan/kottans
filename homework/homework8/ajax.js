$(document).jQuery(document).ready(function($) {
	$.get( "http://api.sudodoki.name:8888/users",function(data){
		console.log(data);
	});
});
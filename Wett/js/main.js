$(document).ready(function(){

	$("body").hide().delay(30).fadeIn(1700);

	$("#wettLogo").hover(
		function() {  
	    $("#wettLogo").toggleClass('active');
	    $("#logoText").toggleClass('active');
	    $("nav").toggleClass('active');
		});
});
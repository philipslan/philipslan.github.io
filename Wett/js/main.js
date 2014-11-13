$(document).ready(function(){

	$("body").hide().delay(30).fadeIn(1700);

	$("#wettLogo").hover(
		function() {  
	    $("#wettLogo").addClass('active');
	    $("#logoText").addClass('active');
		});

	$("#wettLogo").one('mouseover',
		function(){
			$('nav').fadeTo('slow', 0.1, function()
			{
			  $(this).css('visibility', 'visible');
			}).fadeTo('slow', 1);
		});

});
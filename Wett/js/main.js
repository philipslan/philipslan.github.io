$(document).ready(function(){

	$("body").hide().delay(30).fadeIn(1700);

	$("#wettLogo").hover(
		function(){
			$(this).fadeOut(function() {
				$(this).attr("src","images/white.png").fadeIn(1700);
				$(this).css("border","5px solid red");
			})
			$("body").css("background","url(images/sunset.jpg) 50% 62% fixed").fadeIn(1700);
		},
		function(){
			$(this).fadeOut(function() {
				$(this).attr("src","images/wettLogo.png").fadeIn(800);
				$(this).css("border","5px solid white");
			});
			$("body").css("background","black");
		}
	)
});
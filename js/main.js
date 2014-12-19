$(document).ready(function() 
	{ 
		$("#home a").on("click",function() {
			event.preventDefault(); 
			var target = $(this).attr("href"); 
			$("html, body").stop().animate(
				{ scrollLeft: 
					$(target).offset().left, 
					scrollTop: $(target).offset().top 
				}, 500); 
			$('#nav').fadeTo('fast', 0.1, function()
			{
			  $(this).css('visibility', 'visible');
			}).fadeTo('slow', 1);
		});

		$("#nav #homenav").on("click", function() {
			$("#nav").css('visibility','hidden');
		});

		$("#nav a").bind("click",function(event)
			{ 
				event.preventDefault(); 
				var target = $(this).attr("href"); 
				$("html, body").stop().animate(
					{ scrollLeft: 
						$(target).offset().left, 
						scrollTop: $(target).offset().top 
					}, 500); 

			});

		var myDataRef = new Firebase('https://philiplan.firebaseio.com/');
		$('#submit').on("click",function() {
      var name = $('#name').val();
      var email = $('#email').val();
      var subject = $('#subject').val();
      var message= $('#message').val();
      myDataRef.push({name: name, email: email, subject:subject, message: message});
   	});
	}); 


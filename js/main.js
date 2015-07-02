$(document).on("click","#submit",function(){
	var myDataRef = new Firebase('https://philiplan.firebaseio.com/');
  var name = $('#name').val();
  var email = $('#email').val();
  var subject = $('#subject').val();
  var message= $('#message').val();
  myDataRef.push({name: name, email: email, subject:subject, message: message});
});

$(document).on("click","a[href*=#]:not([href=#])",function(){
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top - 64
      }, 1000);
      return false;
    }
  }
});


  

$(document).ready(function(){
  $('.modal-trigger').leanModal();
});

$(document).on("click","#submit",function(){
  var name = $('#name').val();
  var email = $('#email').val();
  var message= $('#message').val();
  $.ajax({
    type: 'POST',
    url: 'https://mandrillapp.com/api/1.0/messages/send.json',
    data: {
      'key': '8ay6DleghB_atygG95SOYA',
      'message': {
        'from_email': 'philipslan@gmail.com',
        'to':[
          {
            'email':'philipslan@gmail.com',
            'name': name,
            'type': 'to'
          }
        ],
        'autotext': 'true',
        'subject': 'Website',
        'html': message + ' Email:' + email
      }
    }
  }).done(function(response) {
    console.log(response); // if you're into that sorta thing
  });
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
$(document).ready(function(){
	$('button').click(function(){
		//$(this).css('border','none');
		$(this).css('outline','none');
	});
	  $('#join').hover(function(){
    $(this).css('font-size','2.2em');
    },
    function(){
    $(this).css('font-size','2em');
  });
});
$(document).on('click', 'a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 250);
});

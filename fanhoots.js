$(document).ready(function(){
	$('button').click(function(){
		//$(this).css('border','none');
		$(this).css('outline','none');
	});
});
$(document).on('click', 'a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 400);
});

$(function() {

	$(".accordion").accordion({	header:'h2'});
	
	$('#sidebar .band .accordion div').attr({style:'height:194px;overflow:hidden;'});
	
	$('#playlist li a').ellipsis();
	
	$('li:first-child').addClass('first');
	$('li:last-child').addClass('last');
	$('li:nth-child(2n)').addClass('even');
	$('tr td:first-child').addClass('label');
	
	$('#search-bar span.close').click(function(){
		$('#search-bar p').css({visibility:'hidden'});
	});
	
	$('#search-bar .panel input[type=radio][value=song]').attr('checked','checked');
	
	$('#search-filters li a').click(function(){
		var text = $.trim($(this).text().toLowerCase());
		$('#search-filters li a.active').removeClass('active');
		$(this).addClass('active');
		$('#search-bar .panel input[type=radio]:checked').removeAttr('checked');
		
		$('#search-bar .panel input[type=radio][value='+text+']').attr('checked','checked');
		
		
		// toggle results
		$('#search-results').toggle();
		$('#search-results-wrapper .note').toggle();
		
	});
	
	$('.main-nav .popout').mouseenter(function() {
		$('ul',this).fadeIn();
	});
	
	$('.main-nav .popout').mouseleave(function() {
		setTimeout("$('.main-nav .popout ul').fadeOut()",500);
	});
	
	$('a.edit.user_profile_image, a.edit.band_profile_image').click(function(){
		$('#content-internal.edit .edit-wrap.profile_image input[type=file]').click();
		return false;
	});
	
	$('#band-gigs ul li').each(function() {
		var li_elem = this;
		$('.edit-wrap a.edit.band-gig',this).click(function() {
			$('input[type=file]',li_elem).click();
			return false;
		});
	});
	
	$('label.required').append(' *');
	
	$('#band-details #our_fans li:nth-child(6n)').addClass('row-last');
	//$('#band-details #our_fans li:nth-child(6n-5)').addClass('row-first');
})

function log(val) {
	try {console.log(val)}
	catch(e){}
}
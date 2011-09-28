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
	
	
})
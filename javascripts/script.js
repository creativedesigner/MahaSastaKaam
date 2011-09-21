$(function() {

	$(".accordion").accordion({	header:'h2'});
	
	$('#sidebar .band .accordion div').attr({style:'height:194px;overflow:hidden;'});
	
	$('#playlist li a').ellipsis();
	
	$('li:first-child').addClass('first');
	$('li:last-child').addClass('last');
	$('li:nth-child(2n)').addClass('even');
	$('#band-details-table tr td:first-child').addClass('label');
})
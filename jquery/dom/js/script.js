$(document).ready(function(){
	/*
	$("#btn").click(function(){
		//alert($("#p1").text());//to fetch value
		
		//var a=$("#p1").text();
		//alert(a);
		$('#p1').text('hello world');//to put content
	})
	*/
	//alert($("#p2").html());
	//$('#p2').html('hello world');
	$('#fontsize').click(function(){
		var a=$('#p2').css('font-Size');
		alert(a);
		
	})
	$("#btn").click(function(){
		
		//$('#mydiv').append("<p>para3</p>");
		//$('#mydiv').after("<p>para3</p>");
		//$('#mydiv').prepend("<p>para3</p>");
		//$('#mydiv').before("<p>para3</p>");
		$('p').remove('#p1');
		//$('#mydiv').empty("<p>para3</p>");
		
	})
});
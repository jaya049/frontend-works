/*
$("#btn1").click(
		function fn1()
		{
			$("#div1").fadeToggle(3000);
		})
		*/
/*
$(document).ready(function(){
	
	//$("#btn1").click(fn2);//single click
	//$("#btn1").dblclick(fn2);//double click
	//fade when mouse comes over:
	//$("#p1").mouseenter(fn2);
	$("#p1").hover(fn2,fn3);
	function fn2()
	{
		$("#p1").fadeOut();
	}
	//$("#p1").mouseleave(fn3);
	function fn3()
	{
		$("#p1").fadeIn();
	}
});
*/
$(document).ready(function(){
	/*
	$("#btn2").click(fn1);
	function fn1(){
		
		$("#div1").hide();
	}
	$("#btn3").click(fn2);
	function fn2(){
		
		$("#div1").show();
	}*/
	/*
	$("#btn2").click(function(){
			$("#div1").hide();
	})
	$("#btn3").click(function(){
			$("#div1").show();
	}) 
	$("#btn4").click(function(){
			$("#div1").toggle();
	}) 
	$("#up").click(function(){
			$("#div1").slideUp();
	}) 
	$("#dn").click(function(){
			$("#div1").slideDown();
	}) 
	$("#tg").click(function(){
			$("#div1").slideToggle();
	}) 
	*/
});

$(document).ready(function(){
	/*
	$("#animate").click(function(){
			$(".box").animate({
			left:'150px',
			opacity:'1'},2000);
	})*/
});
$(document).ready(function(){
	$("#toggle").click(function(){
		$("#div1").fadeToggle(2000,function(){
			alert("hello");//callback function
		});
		
	})
	//slide
	$("#updown").click(function(){
		/*
		$("#div1").slideUp(2000);
		$("#div1").slideDown(2000);
		$("#div1").fadeIn();
		$("#div1").fadeOut();
		*/
		$("#div1").slideUp(2000).slideDown(2000).fadeIn().fadeOut();//chaining effect.
	})
});
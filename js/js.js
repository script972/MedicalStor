$(document).ready(function(){
	$(".burger").click(function(){
		$(".menu ul").slideToggle(500);
		$(".burger").toggleClass("active");
	});
	$(window).resize(function(){
		if($(window).width()  > 769){
			$(".menu ul").removeAttr("style");
		}
	});
});

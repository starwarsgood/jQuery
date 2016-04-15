/*$(document).ready(function(){
    $(".btn-slide").click(function(){
        $("#panel").slideToggle("slow");
        $(this).toggleClass("active");
    });
});*/
/*$(document).ready(function(){
						   
	$(".pane .delete").click(function(){
		$(this).parents(".pane").animate({ opacity: 'hide' }, "slow");
	});

});
*/
/*
$(document).ready(function(){


	$(".run").click(function(){
	
		$("#box").animate({opacity: "0.1", left: "+=400"}, 1200)
		.animate({opacity: "0.4", top: "+=160", height: "20", width: "20"}, "slow")
		.animate({opacity: "1", left: "0", height: "100", width: "100"}, "slow")
		.animate({top: "0"}, "fast")
		.slideUp()
		.slideDown("slow")
		return false;
	
	});

});
*/
/*
$(document).ready(function(){
	
	$(".accordion h3:first").addClass("active");
	$(".accordion p:not(:first)").hide();

	$(".accordion h3").click(function(){
		$(this).next("p").slideToggle("slow")
		.siblings("p:visible").slideUp("slow");
		$(this).toggleClass("active");
		$(this).siblings("h3").removeClass("active");
	});

});*/

/*$(document).ready(function(){

	$(".menu a").hover(function() {
		$(this).next("em").stop(true,true)
                          .animate({opacity: "show", top: "-75"}, "slow");
	}, function() {
		$(this).next("em").stop(true,true)
                          .animate({opacity: "hide", top: "-85"}, "fast");
	});


});*/



/*<script type="text/javascript">
$(document).ready(function(){
						   
	$(".pane-list li").click(function(){
    	window.location=$(this).find("a").attr("href");return false;
	});

});
*/ 
/*$(document).ready(function(){
	$(".message_list .message_body:gt(0)").hide();
	$(".message_list li:gt(4)").hide();
	$(".message_head").click(function(){
		$(this).next(".message_body").slideToggle(500)
		return false;
	});
	$(".collpase_all_message").click(function(){
		$(".message_body").slideUp(500)
		return false;
	});
	$(".show_all_message").click(function(){
		$(this).hide()
		$(".show_recent_only").show()
		$(".message_list li:gt(4)").slideDown()
		return false;
	});
	$(".show_recent_only").click(function(){
		$(this).hide()
		$(".show_all_message").show()
		$(".message_list li:gt(4)").slideUp()
		return false;
	});

});*/
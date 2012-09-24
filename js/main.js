// console.log("main.js is loaded");
// $("img").width(200);

$(document).ready(function(){
	$("button").on("click",function(){
		$(".booboo").html(
			$("textarea").val()
		);
		
	});

	$("li").on("click",function(){

		//$("li").addClass("done");
		if($(this).hasClass("done")){
			$(this).removeClass("done");
		}else{
			$(this).addClass("done");
		}
		//$(this).addClass("done");
	})
	
	$("img").on("dblclick", function(){
		 $("img").width(200);
		 $("h1").fadeOut();
		 $(".booboo").slideUp();
		 $("#rahul").hide();
	});

	// $("img").on("click", function(){
	// 	 $("img").width(200);
	// });


	// $("img").click(function(){
	// 	 $("img").width(200);
	// });

});


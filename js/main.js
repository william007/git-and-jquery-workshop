// console.log("main.js is loaded");
// $("img").width(200);

$(document).ready(function(){
	
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
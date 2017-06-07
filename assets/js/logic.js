$(".go-to-left").on("click", function() {
	console.log("getting input");
	$(".footContainer").children().removeClass("active");
	$("#button-left").addClass("active");
	$("#cubeID").removeClass();
	$("#cubeID").addClass("cube left-view");
})

$(".go-to-front").on("click", function() {
	console.log("getting input");
	$(".footContainer").children().removeClass("active");
	$("#button-front").addClass("active");
	$("#cubeID").removeClass();
	$("#cubeID").addClass("cube");
})

$(".go-to-back").on("click", function() {
	$(".footContainer").children().removeClass("active");
	$("#button-back").addClass("active");
	$("#cubeID").removeClass();
	$("#cubeID").addClass("cube back-view");
})

$(".go-to-top").on("click", function() {
	console.log("dafuck");
	$(".footContainer").children().removeClass("active");
	$("#button-top").addClass("active");
	$("#cubeID").removeClass();
	$("#cubeID").addClass("cube top-view");
})

$(".go-to-right").on("click", function() {
	console.log("dafuck");
	$(".footContainer").children().removeClass("active");
	$("#button-right").addClass("active");
	$("#cubeID").removeClass();
	$("#cubeID").addClass("cube right-view");
})

$(".go-to-bottom").on("click", function() {
	console.log("dafuck");
	$(".footContainer").children().removeClass("active");
	$("#button-bottom").addClass("active");
	$("#cubeID").removeClass();
	$("#cubeID").addClass("cube bottom-view");
})
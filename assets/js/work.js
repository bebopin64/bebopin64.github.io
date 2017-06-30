$(".work-hover").on('click', function() {
	// $(".WR").addClass("red-shake-move");
	// $(".WB").addClass("blue-shake-move");
	$(".work-target").addClass("workAnimationMove");
	moveWorkLeft();
	$(".about-holder").addClass("clear");
	$(".contact-holder").addClass("clear");
	$(".right").addClass("clear");
	$(".left").addClass("clear");
	setTimeout(function() {
		$(".WR").removeClass("red-shake-move");
		$(".WB").removeClass("blue-shake-move");
		$(".work-target").removeClass("workAnimationMove");
		moveWorkRight();
		$(".work-holder").addClass("workMove");
	}, 1400);
});

function moveWorkLeft() {
	$(".w1").css({"transform" : "translateY(calc(100vw - 9vh))"});
	$(".w2").css({"transform" : "translateY(calc(100vw - 9vh))"});
	$(".w3").css({"transform" : "translateY(calc(100vw - 9vh))"});
	$(".w4").css({"transform" : "translateY(calc(100vw - 9vh))"});
}

function moveWorkRight() {
	$(".w1").css({"transition" : "transform 1s ease-in-out, width .5s ease-in-out", "transform" : "translateY(0)"});
	$(".w2").css({"transition" : "transform 1s ease-in-out, width .5s ease-in-out", "transform" : "translateY(0)"});
	$(".w3").css({"transition" : "transform 1s ease-in-out, width .5s ease-in-out", "transform" : "translateY(0)"});
	$(".w4").css({"transition" : "transform 1s ease-in-out, width .5s ease-in-out", "transform" : "translateY(0)"});
}


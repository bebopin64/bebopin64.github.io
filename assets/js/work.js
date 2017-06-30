$(".work-hover").on('click', function() {
	// $(".WR").addClass("red-shake-move");
	// $(".WB").addClass("blue-shake-move");
	$(".work-target").addClass("workAnimationMove");
	$(".work-holder").addClass("workMove");
	$(".about-holder").addClass("clear");
	$(".contact-holder").addClass("clear");
	$(".right").addClass("clear");
	$(".left").addClass("clear");

	

	setTimeout(function() {
		$(".WR").removeClass("red-shake-move");
		$(".WB").removeClass("blue-shake-move");
		$(".work-target").removeClass("workAnimationMove");
		shrinkLogo();
	}, 1000);
});

function shrinkLogo() {
	logoScale = .7;
}
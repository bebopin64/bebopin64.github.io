var workClosed = true;

function workInit() {
	$(".work-hover").on('click', function() {
		$(".work-target").addClass("workAnimationMove");
		if (workClosed) {
			moveWorkLeft();
			displayWork();
		} else {
			moveWorkRight();
			displayHome();
		}
	});
}

function moveWorkLeft() {
	$(".work-target").addClass("workAnimationMove");
	workClosed = false;
	$(".work-holder").css({"transform" : "translateX(calc(-110vw)) rotate(90deg)"});
	$(".page-background").css("background-position", "-15vw 0px");
	$(".page-background2").css("background-position", "-30vw 0px");
	setTimeout(function() {
		$(".about-holder").addClass("clear");
		$(".work-holder").html(
			"<div class='work-hover'></div><div class='workFix work-target'><div>B</div></div><div class='work-target'><div>A</div></div><div class='work-target'><div>C</div></div><div class='work-target'><div>K</div></div>"
		);
		$(".work-holder").css({
			"transition" : "transform .5s ease-in-out",
			"transform" : "translateX(calc(-100vw + 9vh)) rotate(90deg)"}
		);
		navInit();
		workInit();
	}, 700);	
}

function moveWorkRight() {
	$(".work-target").addClass("workAnimationMove");
	workClosed = true;
	$(".work-holder").css({"transition" : "opacity .5s linear, transform .8s ease-in-out"});
	$(".work-holder").css({"transform" : "translateX(calc(10vw)) rotate(90deg)"});
	$(".page-background").css("background-position", "0vw 0px");
	$(".page-background2").css("background-position", "0vw 0px");
	setTimeout(function() {
		$(".about-holder").removeClass("clear");
		$(".work-holder").html(
			"<div class='work-hover'></div><div class='workFix work-target'><div>W</div></div><div class='work-target'><div>O</div></div><div class='work-target'><div>R</div></div><div class='work-target'><div>K</div></div>"
		);
		$(".work-holder").css({
			"transition" : "transform .5s ease-in-out",
			"transform" : "translateX(0) rotate(90deg)"}
		);
		navInit();
		workInit();
		setTimeout(function() {
			$(".work-holder").css("transition", "opacity .5s linear, transform .8s ease-in-out");
		}, 500);
	}, 700);
}


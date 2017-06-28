// NAV CONTACT NAC CONTACT NAC CONTACT

$(".contact-hover").hover(function() {
	$(".CR").addClass("red-shake");
	$(".CB").addClass("blue-shake");
	$(".contact-target").addClass("contactAnimation");
}, function() {
	$(".CR").removeClass("red-shake");
	$(".CB").removeClass("blue-shake");
	$(".contact-target").removeClass("contactAnimation");
});


$(".work-hover").hover(function() {
	$(".WR").addClass("red-shake");
	$(".WB").addClass("blue-shake");
	$(".work-target").addClass("workAnimation");
}, function() {
	$(".WR").removeClass("red-shake");
	$(".WB").removeClass("blue-shake");
	$(".work-target").removeClass("workAnimation");
});

$(".about-hover").hover(function() {
	$(".AR").addClass("red-shake");
	$(".AB").addClass("blue-shake");
	$(".about-target").addClass("aboutAnimation");
}, function() {
	$(".AR").removeClass("red-shake");
	$(".AB").removeClass("blue-shake");
	$(".about-target").removeClass("aboutAnimation");
});

// function to randomly animate a nav button occasionally

function shakeInterval() {
	var i = Math.floor(Math.random()*4);
	if (i < 1) {
		$(".WR").addClass("red-shake-interval");
		$(".WB").addClass("blue-shake-interval");
		setTimeout(function() {
			$(".WR").removeClass("red-shake-interval");
			$(".WB").removeClass("blue-shake-interval");
			shakeInterval();
		}, 2500);
	} else if (i < 2) {
		$(".CR").addClass("red-shake-interval");
		$(".CB").addClass("blue-shake-interval");
		setTimeout(function() {
			$(".CR").removeClass("red-shake-interval");
			$(".CB").removeClass("blue-shake-interval");
			shakeInterval();
		}, 2500);
	} else if (i < 3) {
		$(".AR").addClass("red-shake-interval");
		$(".AB").addClass("blue-shake-interval");
		setTimeout(function() {
			$(".AR").removeClass("red-shake-interval");
			$(".AB").removeClass("blue-shake-interval");
			shakeInterval();
		}, 2500);
	} else {
		setTimeout(function() {setInterval();}, 2500);
	}
}

setTimeout(function() {shakeInterval();}, 5000);
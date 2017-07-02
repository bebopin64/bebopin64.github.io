// NAV CONTACT NAC CONTACT NAC CONTACT
function navInit() {
	$(".contact-hover").hover(function() {
		$(".contact-target").addClass("contactAnimation");
	}, function() {
		$(".contact-target").removeClass("contactAnimation");
	});
	$(".work-hover").hover(function() {
		$(".work-target").addClass("workAnimation");
	}, function() {
		$(".work-target").removeClass("workAnimation");
	});

	$(".about-hover").hover(function() {
		$(".about-target").addClass("aboutAnimation");
	}, function() {
		$(".about-target").removeClass("aboutAnimation");
	});
}

$(document).ready(function() {
	navInit();
	workInit();
});

// randomly animate a nav button occasionally

function addGlitch() {
	$(".WR").addClass("red-shake-interval");
	$(".WB").addClass("blue-shake-interval");
	$(".CR").addClass("red-shake-interval");
	$(".CB").addClass("blue-shake-interval");
	$(".AR").addClass("red-shake-interval");
	$(".AB").addClass("blue-shake-interval");	
}

function stopGlitch() {
	$(".WR").removeClass("red-shake-interval");
	$(".WB").removeClass("blue-shake-interval");
	$(".CR").removeClass("red-shake-interval");
	$(".CB").removeClass("blue-shake-interval");
	$(".AR").removeClass("red-shake-interval");
	$(".AB").removeClass("blue-shake-interval");
}

function shakeInterval() {
	var length = Math.random()*500;
	var time = Math.random()*5000;
	addGlitch();
	setTimeout(function() {stopGlitch();}, length);
	setTimeout(function() {shakeInterval();}, time);
}
// setTimeout(function() {shakeInterval();}, 5500);
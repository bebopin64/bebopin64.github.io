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

setTimeout(function() {shakeInterval();}, 5500);

// SOCIAL BUTTON ANIMATIONS

$(".github").hover(function() {
	$(".github").addClass("scale");
}, function() {
	$(".github").removeClass("scale");
});
$(".linkedin").hover(function() {
	$(".linkedin").addClass("scale");
}, function() {
	$(".linkedin").removeClass("scale");
});
$(".facebook").hover(function() {
	$(".facebook").addClass("scale");
}, function() {
	$(".facebook").removeClass("scale");
});
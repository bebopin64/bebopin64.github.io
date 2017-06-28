// NAV CONTACT NAC CONTACT NAC CONTACT

$(".contact-holder").hover(function() {
	$(".red").addClass("red-shake");
	$(".blue").addClass("blue-shake");
	$(".contact-target").addClass("topNavAnimation");
}, function() {
	$(".red").removeClass("red-shake");
	$(".blue").removeClass("blue-shake");
	$(".contact-target").removeClass("topNavAnimation");
});
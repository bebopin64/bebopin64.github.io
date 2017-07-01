$("body").on('mousemove', function(e) {
	var xRel = e.pageX;
	var yRel = e.pageY;
	var yAngle = ((xRel / window.innerWidth) - .5) * 3;
	var xAngle = -((yRel / window.innerHeight) - .5) * 3;
	updateView(xAngle, yAngle);
})

var logoScale = 1;
var logoMult = 2.5;

function updateView(xAngle, yAngle) {
	var transform = "scale("+logoScale+") rotateX(" + xAngle*logoMult + "deg) rotateY(" + yAngle*logoMult + "deg)";
	$(".logo-cont").css({
		'transform': transform
	});
	// var bgtransform = "translateX(" + -yAngle*2.5 + "vw) translateY(" + xAngle*2.5 + "vh) scale(2)";
	// $(".page-background").css({
	// 	'transform': bgtransform
	// });
	// var bgtransform2 = "translateX(" + yAngle*2.5 + "vw) translateY(" + -xAngle*2.5 + "vh) scale(2)";
	// $(".page-background2").css({
	// 	'transform': bgtransform2
	// });
}

var offset = 0;

function animateBG() {
	$(".page-background").css("background-position", -offset*2 + "px 0px");
	$(".page-background2").css("background-position", offset*3 + "px 0px");
	offset += 1;
	setTimeout(function() {animateBG();}, 100);
}
// setTimeout(function() {animateBG();}, 6000);



$("body").on('mousemove', function(e) {
	var xRel = e.pageX;
	var yRel = e.pageY;
	var yAngle = ((xRel / window.innerWidth) - .5) * 3;
	var xAngle = -((yRel / window.innerHeight) - .5) * 3;
	updateView(xAngle, yAngle);
})

function updateView(xAngle, yAngle) {
	var transform = "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg) translateX("+ (-yAngle*3) +"px) translateY("+ (xAngle*5) +"px)";
	$(".logo-cont").css({
		'transform': transform
	});
	var bgtransform = "translateX(" + yAngle*.5 + "vw) translateY(" + -xAngle*.5 + "vh) scale(1.1)";
	$(".page-background").css({
		'transform': bgtransform
	});
}
$("body").on('mousemove', function(e) {
	var xRel = e.pageX;
	var yRel = e.pageY;
	var yAngle = ((xRel / window.innerWidth) - .5) * 5;
	var xAngle = -((yRel / window.innerHeight) - .5) * 5;
	updateView(xAngle, yAngle);
})

function updateView(xAngle, yAngle) {
	var transform = "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg) translateX("+ (-yAngle*3) +"px) translateY("+ (xAngle*5) +"px)";
	$(".logo-cont").css({
		'transform': transform
	})
}
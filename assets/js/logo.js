$("#mouse-tracker").on('mousemove', function(e) {
	var xRel = e.pageX;
	var yRel = e.pageY;
	var yAngle = ((xRel / window.innerWidth) - .5) * 7.5;
	var xAngle = -((yRel / window.innerHeight) - .5) * 7.5;
	updateView(xAngle, yAngle);
})

function updateView(xAngle, yAngle) {
	var transform = "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg)";
	$(".test-cont").css({
		'transform': transform
	})
}
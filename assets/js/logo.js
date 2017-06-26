var xAngle;
var yAngle;

$("#mouse-tracker").on('mousemove', function(e) {
	var xRel = e.pageX;
	var yRel = e.pageY;
	var xPosition = (xRel / window.innerWidth) - .5;	
	var yPosition = (yRel / window.innerHeight) - .5;
	yAngle = xPosition * 8;
	xAngle = -yPosition * 8;
	updateView();
})

function updateView() {
	var transform = "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg)";
	$(".test-cont").css({
		'transform': transform
	})
}
// ------------------Stars------------------------------------

var colorArr = ["white","white","white","white","white","white","white","white","white","white","#892F52","#D778B8","#7E45A4","#7E45A4","#554FBD"];
var counter = 0;
var welcomeIndex = 0;
var letArr = ["L","O","A","D","I","N","G"];	

function populateStars() {
	for (var i = 0;i<10;i++) {
		var x = Math.random()*1 + "vw";
		var y = Math.random()*100 + "vh";
		var colorIndex = Math.floor(Math.random()*15);
		var color = colorArr[colorIndex];
		var opacity = Math.random();
		var size = Math.random()*.2 + "vh";
		var target = ".row" + (Math.floor(Math.random()*100));
		$("<div class='remove' style='border-radius:50%;position:absolute;left:"+x+";top:"+y+";opacity:"+opacity+";height:"+size+";width:"+size+";background-color:"+color+";'></div>").appendTo(target).hide().fadeIn(1000 + Math.random()*1000);
		counter++;
	}
	if (counter < 1000) {
		setTimeout(function() {populateStars();}, 1);
	}
}

window.onload = function() {
	console.log("hi");
	setTimeout(function() {
		populateStars();
		populateStars();
		populateStars();
		populateStars();
		populateStars();
	}, 100);
}


// --------------------Create Rows------------------------------
for (var i=0;i<100;i++) {
	var time = Math.random()/5 + .8;
	$(".splash-cont").append(
		"<div class='row row"+i+"' style='transform-style: flat;height:100%; width: 1%; position:relative; background-color: black;float: left; transition: transform 1s ease-in-out;'></div>"
	);
	if (i === 99) {		
		welcome();
	}
}

function welcome() {
	var row = 44 + welcomeIndex*2;
	var target = ".row"+row;
	$(target).append("<div class='flicker-in-1' style='transform-style: flat;width: 200%; position: absolute; top: 49vh; text-align: center; color:white; z-index: 2;'><p id="+welcomeIndex+">"+letArr[welcomeIndex]+"</p></div>");
	welcomeIndex++;
	if (welcomeIndex < 7) {
		setTimeout(function() {welcome();}, 50);
	} else {
		welcomeIndex = 0;
		setTimeout(function() {flickerOut();}, 3000);
	}
}

function flickerOut() {
	var target = "#"+welcomeIndex;
	$(target).addClass("flicker-out-1");
	welcomeIndex++;
	if (welcomeIndex < 7) {
		setTimeout(function() {flickerOut();}, 50);
	} else {
		setTimeout(function() {
			splashSlide();
			splashSlide();
			splashSlide();
		}, 1500);
		setTimeout(function() {
			$(".splash").remove();
			 $(".borders-top").addClass("show1");
			 $(".borders-bottom").addClass("show1");
			 setTimeout(function() {
				line1letters(); 
				line1word();
			}, 800); 
		}, 3500);
	}
}

// --------------------------Animate Rows off screen------------
var fellArr = [];

function splashSlide() {
	var row = Math.floor(Math.random()*100);
	var target = ".row" + row;
	if (fellArr.indexOf(row) < 0) {
		fellArr.push(row);
		$(target).addClass("slideDown");
	} else {
		setTimeout(function() {splashSlide();}, 500);
	}
	if (fellArr.length < 100) {
		setTimeout(function() {splashSlide();}, 1);
	}
}

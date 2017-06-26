var colorArr = ["white","white","white","white","white","white","white","white","white","white","#E3EF99","#682860","#682860","#6D4047","#E3EF99"];
var counter = 0;

function populateStars() {
	for (i=0;i<2000;i++) {
		var xDistance = Math.floor(Math.random()*1000) / 10 + "vw";
		var yDistance = Math.floor(Math.random()*1000) / 10 + "vh";
		var colorIndex = Math.floor(Math.random()*15);
		var color = colorArr[colorIndex];
		var opacity = Math.random();
		var size = Math.floor(Math.random()*2) + "px";
		$("#target").append("<div id="+counter+" style='border-radius:50%;position:fixed;left:"+xDistance+";top:"+yDistance+";opacity:"+opacity+";height:"+size+";width:"+size+";background-color:"+color+";z-index:1;transition:opacity .5s linear;'></div>");
		counter++;
	}
	counter = 0;
}

populateStars();

function twinkle() {
	var xDistance = Math.floor(Math.random()*1000) / 10 + "vw";
	var yDistance = Math.floor(Math.random()*1000) / 10 + "vh";
	var colorIndex = Math.floor(Math.random()*15);
	var color = colorArr[colorIndex];
	var opacity = Math.random();
	var targetIndex = Math.floor(Math.random()*2000);
	var targetDiv = "#"+targetIndex;
	var size = Math.floor(Math.random()*2) + "px";
	$(targetDiv).empty();
	$(targetDiv).html("<div style='border-radius:50%;position:fixed;left:"+xDistance+";top:"+yDistance+";opacity:"+opacity+";height:"+size+";width:"+size+";background-color:"+color+";z-index:1;transition:opacity .5s linear;'></div>");
}

var twinkleInterval0 = setInterval(function() {twinkle()}, .01);
var twinkleInterval1 = setInterval(function() {twinkle()}, .01);
var twinkleInterval2 = setInterval(function() {twinkle()}, .01);
var twinkleInterval3 = setInterval(function() {twinkle()}, .01);
var twinkleInterval4 = setInterval(function() {twinkle()}, .01);


$(".social-label-black").on('click', function() {
	$(".over").toggleClass("slide");
	$(".over").toggleClass("up");
});

$(".social-over").on('click', function() {
	console.log("wut");
	$(".social-over").toggleClass("social-slide");
	$(".social-over").toggleClass("social-up");
});

$(".social-under").on('click', function() {
	console.log("wut");
	$(".social-over").toggleClass("social-slide");
	$(".social-over").toggleClass("social-up");
});

for (i=0;i<30;i++) {
	console.log(Math.floor(Math.random()*4 - 2));
}

$(".social-letters").hover(function() {
	console.log("read");
	$(".social-label-red").toggleClass("shake-red");
	$(".social-label-blue").toggleClass("shake-blue");
	$(".social-label-black").toggleClass("shake-black");
}, function() {
	$(".social-label-red").toggleClass("shake-red");
	$(".social-label-blue").toggleClass("shake-blue");
	$(".social-label-black").toggleClass("shake-black");
});

var lettersArr = "abcdefghijklmnopqrstuvwxyz".split('');
var wordSoFar = "";

function letters(string, div) {
	var temp = "";
	var target = $(".topTest");
	for (j=0;j < (string.length - wordSoFar.length);j++) {
		temp += lettersArr[Math.floor(Math.random()*26)];
	}
	target.text(wordSoFar + temp);
	if (temp === "") {
		console.log("done");
	} else {
		temp = "";
		setTimeout(function() {letters(string)}, 50);
	}
}

var developerArr = ["|","D","e","v","e","l","o","p","e","r"];
var developerIndex = 0;

function Developer() {
	console.log(developerArr[developerIndex]);
	wordSoFar += developerArr[developerIndex];
	developerIndex++;
	if (developerIndex === developerArr.length) {
		console.log("done");
	} else {
		setTimeout(function() {Developer();}, 200);
	}
}
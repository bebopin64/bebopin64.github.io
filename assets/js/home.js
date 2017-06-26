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
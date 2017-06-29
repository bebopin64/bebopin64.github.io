var lettersArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
var line1 = "";
var line2 = "";
var line3 = "";
var line4 = "";
var line5 = "";
var line1Index = 0;
var line2Index = 0;
var line3Index = 0;
var line4Index = 0;
var line5Index = 0;
var line1Arr = [" ","H","E","L","L","O","<span style='font-weight: bold;'>,</span>"];
var line2Arr = ["W","E","L","C","O","M","E"," "];
var line3Arr = [" ","T","O"];
var line4Arr = ["M","Y"," "];
var line5Arr = [" ","P","O","R","T","F","O","L","I","O","<span id='version'><span style='color: blue;'>v</span>.  1.0</span>"];
var stop = false;


// -----1-------

function line1letters() {
	var temp = "";
	if (line1.length > 0) {
		for (j=0;j < (line1Arr.length - line1.length);j++) {
			temp += lettersArr[Math.floor(Math.random()*26)];
		}
	} else {
		setTimeout(function() {line1letters();}, 10);
	}
	$(".line-1").html(line1 + temp);
	if (temp === "") {
		return;
	} else {
		temp = "";
		setTimeout(function() {line1letters();}, 40);
	}
}

function line1word() {
	line1 += line1Arr[line1Index];
	line1Index++;
	if (line1Index === line1Arr.length) {
		setTimeout(function() {line2word();}, 240);
		setTimeout(function() {line2letters();}, 240);
	} else {
		setTimeout(function() {line1word();}, 70);
	}
}

// -----2--------

function line2letters() {
	var temp = "";
	for (j=0;j < (line2Arr.length - (line2.length - 0));j++) {
		temp += lettersArr[Math.floor(Math.random()*26)];
	}
	$(".line-2").html(line2 + temp);
	if (temp === "") {
	} else {
		temp = "";
		setTimeout(function() {line2letters();}, 40);
	}
}

function line2word() {
	line2 += line2Arr[line2Index];
	line2Index++;
	if (line2Index === line2Arr.length) {
		setTimeout(function() {line3word();}, 40);
		setTimeout(function() {line3letters();}, 40);
	} else {
		setTimeout(function() {line2word();}, 70);
	}
}

// -------3--------

function line3letters() {
	var temp = "";
	for (j=0;j < (line3Arr.length - (line3.length - 0));j++) {
		temp += lettersArr[Math.floor(Math.random()*26)];
	}
	$(".line-3").html(line3 + temp);
	if (temp === "") {
	} else {
		temp = "";
		setTimeout(function() {line3letters();}, 40);
	}
}

function line3word() {
	line3 += line3Arr[line3Index];
	line3Index++;
	if (line3Index === line3Arr.length) {
		setTimeout(function() {line4word();}, 40);
		setTimeout(function() {line4letters();}, 40);
	} else {
		setTimeout(function() {line3word();}, 70);
	}
}

// -------4---------

function line4letters() {
	var temp = "";
	for (j=0;j < (line4Arr.length - (line4.length));j++) {
		temp += lettersArr[Math.floor(Math.random()*26)];
	}
	$(".line-4").html(line4 + temp);
	if (temp === "") {
	} else {
		temp = "";
		setTimeout(function() {line4letters();}, 40);
	}
}

function line4word() {
	line4 += line4Arr[line4Index];
	line4Index++;
	if (line4Index === line4Arr.length) {
		setTimeout(function() {line5word();}, 40);
		setTimeout(function() {line5letters();}, 40);
	} else {
		setTimeout(function() {line4word();}, 70);
	}
}

// --------5--------------

function line5letters() {
	var temp = "";
	for (j=0;j < (line5Arr.length - line5.length);j++) {
		temp += lettersArr[Math.floor(Math.random()*26)];
	}
	$(".line-5").html(line5 + temp);
	if (temp === "") {
	} else {
		temp = "";
		setTimeout(function() {line5letters();}, 40);
	}
}

function line5word() {
	line5 += line5Arr[line5Index];
	line5Index++;
	if (line5Index === line5Arr.length) {
			 $(".borders-top").addClass("show2");
			 $(".borders-bottom").addClass("show2");
		setTimeout(function() {
			jumble1letters(); 
			jumble1word();
		}, 800); 
	} else {
		setTimeout(function() {line5word();}, 70);
	}
}

var jumble1 = "";
var jumble2 = "";
var jumble3 = "";
var jumble4 = "";
var jumble5 = "";
var jumble1Index = 0;
var jumble2Index = 0;
var jumble3Index = 0;
var jumble4Index = 0;
var jumble5Index = 0;
var jumble1Arr = "RKUJH".split('');
var jumble2Arr = "QLJ".split('');
var jumble3Arr = "QSE".split('');
var jumble4Arr = "GHIUJERF".split('');
var jumble5Arr = "ZK".split('');


// -----1-------

function jumble1letters() {
	var temp = "";
	for (j=0;j < (jumble1Arr.length - jumble1.length);j++) {
		temp += lettersArr[Math.floor(Math.random()*26)];
	}
	$(".jumble-1").html(jumble1 + temp);
	if (jumble1Arr.length === jumble1.length) {
		setTimeout(function() {jumble2letters();}, 40);
	} else {
		temp = "";
		setTimeout(function() {jumble1letters();}, 40);
	}
}

function jumble1word() {
	jumble1 += jumble1Arr[jumble1Index];
	jumble1Index++;
	if (jumble1Index === jumble1Arr.length) {
		setTimeout(function() {jumble2word();}, 70);
	} else {
		setTimeout(function() {jumble1word();}, 70);
	}
}

// -----2--------

function jumble2letters() {
	var temp = "";
	for (j=0;j < (jumble2Arr.length - jumble2.length);j++) {
		temp += lettersArr[Math.floor(Math.random()*26)];
	}
	$(".jumble-2").html(jumble2 + temp);
	if (temp === "") {
		setTimeout(function() {jumble3letters();}, 40);
	} else {
		temp = "";
		setTimeout(function() {jumble2letters();}, 40);
	}
}

function jumble2word() {
	jumble2 += jumble2Arr[jumble2Index];
	jumble2Index++;
	if (jumble2Index === jumble2Arr.length) {
		setTimeout(function() {jumble3word();}, 70);
	} else {
		setTimeout(function() {jumble2word();}, 70);
	}
}

// -------3--------

function jumble3letters() {
	var temp = "";
	for (j=0;j < (jumble3Arr.length - jumble3.length);j++) {
		temp += lettersArr[Math.floor(Math.random()*26)];
	}
	$(".jumble-3").html(jumble3 + temp);
	if (temp === "") {
		setTimeout(function() {jumble4letters();}, 40);
	} else {
		temp = "";
		setTimeout(function() {jumble3letters();}, 40);
	}
}

function jumble3word() {
	jumble3 += jumble3Arr[jumble3Index];
	jumble3Index++;
	if (jumble3Index === jumble3Arr.length) {
		setTimeout(function() {jumble4word();}, 70);
	} else {
		setTimeout(function() {jumble3word();}, 70);
	}
}

// -------4---------

function jumble4letters() {
	var temp = "";
	for (j=0;j < (jumble4Arr.length - jumble4.length);j++) {
		temp += lettersArr[Math.floor(Math.random()*26)];
	}
	$(".jumble-4").html(jumble4 + temp);
	if (temp === "") {
		setTimeout(function() {jumble5letters();}, 40);
	} else {
		temp = "";
		setTimeout(function() {jumble4letters();}, 40);
	}
}

function jumble4word() {
	jumble4 += jumble4Arr[jumble4Index];
	jumble4Index++;
	if (jumble4Index === jumble4Arr.length) {
		setTimeout(function() {stop = true;}, 700);
	} else {
		setTimeout(function() {jumble4word();}, 70);
	}
}

// --------5--------------

function jumble5letters() {
	var temp = "";
	for (j=0;j < ((jumble5Arr.length - jumble5.length));j++) {
		temp += lettersArr[Math.floor(Math.random()*26)];
	}
	$(".jumble-5").html(jumble5 + temp);
	if (stop) {
		stop = false;
		temp = "";
		jumble5letters();
		setTimeout(function() {
			$(".jumble-1").addClass("addToJumble");
			$(".jumble-2").addClass("addToJumble");
			$(".jumble-3").addClass("addToJumble");
			$(".jumble-4").addClass("addToJumble");
			$(".jumble-5").addClass("addToJumble");
			$(".sorted-1").addClass("addToSorted");
			$(".sorted-2").addClass("addToSorted");
			$(".sorted-3").addClass("addToSorted");
			$(".sorted-4").addClass("addToSorted");
			$(".sorted-5").addClass("addToSorted");
		}, 450);
	} else {
		temp = "";
		setTimeout(function() {jumble5letters();}, 40);
	}
}

function jumble5word() {
	jumble5 += jumble5Arr[jumble5Index];
	jumble5Index++;
	if (jumble5Index === jumble5Arr.length) {
		return;
	} else {
		setTimeout(function() {jumble5word();}, 80);
	}
}
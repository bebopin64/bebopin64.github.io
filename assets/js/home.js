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
var line1Arr = "| HELLO,".split('');
var line2Arr = "WELCOME |".split('');
var line3Arr = "| TO".split('');
var line4Arr = "MY |".split('');
var line5Arr = "| WEB PORTFOLIO |".split('');


// -----1-------

function line1letters() {
	var temp = "";
	for (j=0;j < (line1Arr.length - line1.length);j++) {
		temp += lettersArr[Math.floor(Math.random()*26)];
	}
	$(".line-1").html(line1 + temp);
	if (line1Arr.length === line1.length) {
		console.log("Called letters");
		setTimeout(function() {line2letters();}, 350);
	} else {
		console.log("test");
		temp = "";
		setTimeout(function() {line1letters();}, 50);
	}
}

function line1word() {
	line1 += line1Arr[line1Index];
	line1Index++;
	if (line1Index === line1Arr.length) {
		console.log("Called word");
		setTimeout(function() {line2word();}, 350);
	} else {
		console.log("test2");
		setTimeout(function() {line1word();}, 100);
	}
}

// -----2--------

function line2letters() {
	var temp = "";
	for (j=0;j < (line2Arr.length - line2.length);j++) {
		temp += lettersArr[Math.floor(Math.random()*26)];
	}
	$(".line-2").html(line2 + temp);
	if (temp == "") {
		setTimeout(function() {line3letters();}, 100);
	} else {
		temp = "";
		setTimeout(function() {line2letters();}, 50);
	}
}

function line2word() {
	line2 += line2Arr[line2Index];
	line2Index++;
	if (line2Index === line2Arr.length) {
		setTimeout(function() {line3word();}, 100);
	} else {
		setTimeout(function() {line2word();}, 100);
	}
}

// -------3--------

function line3letters() {
	var temp = "";
	for (j=0;j < (line3Arr.length - line3.length);j++) {
		temp += lettersArr[Math.floor(Math.random()*26)];
	}
	$(".line-3").html(line3 + temp);
	if (temp == "") {
		setTimeout(function() {line4letters();}, 50);
	} else {
		temp = "";
		setTimeout(function() {line3letters();}, 50);
	}
}

function line3word() {
	line3 += line3Arr[line3Index];
	line3Index++;
	if (line3Index === line3Arr.length) {
		setTimeout(function() {line4word();}, 50);
	} else {
		setTimeout(function() {line3word();}, 100);
	}
}

// -------4---------

function line4letters() {
	var temp = "";
	for (j=0;j < (line4Arr.length - line4.length);j++) {
		temp += lettersArr[Math.floor(Math.random()*26)];
	}
	$(".line-4").html(line4 + temp);
	if (temp == "") {
		setTimeout(function() {line5letters();}, 200);
	} else {
		temp = "";
		setTimeout(function() {line4letters();}, 50);
	}
}

function line4word() {
	line4 += line4Arr[line4Index];
	line4Index++;
	if (line4Index === line4Arr.length) {
		setTimeout(function() {line5word();}, 200);
	} else {
		setTimeout(function() {line4word();}, 100);
	}
}

// --------5--------------

function line5letters() {
	var temp = "";
	for (j=0;j < (line5Arr.length - line5.length);j++) {
		temp += lettersArr[Math.floor(Math.random()*26)];
	}
	$(".line-5").html(line5 + temp);
	if (temp == "") {
		// call next
	} else {
		temp = "";
		setTimeout(function() {line5letters();}, 50);
	}
}

function line5word() {
	line5 += line5Arr[line5Index];
	line5Index++;
	if (line5Index === line5Arr.length) {
		// call next
	} else {
		setTimeout(function() {line5word();}, 50);
	}
}
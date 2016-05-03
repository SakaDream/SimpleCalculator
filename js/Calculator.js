function num0() {
	document.getElementsByName('display')[0].value += "0";
}
function num1() {
	document.getElementsByName('display')[0].value += "1";
}
function num2() {
	document.getElementsByName('display')[0].value += "2";
}
function num3() {
	document.getElementsByName('display')[0].value += "3";
}
function num4() {
	document.getElementsByName('display')[0].value += "4";
}
function num5() {
	document.getElementsByName('display')[0].value += "5";
}
function num6() {
	document.getElementsByName('display')[0].value += "6";
}
function num7() {
	document.getElementsByName('display')[0].value += "7";
}
function num8() {
	document.getElementsByName('display')[0].value += "8";
}
function num9() {
	document.getElementsByName('display')[0].value += "9";
}
function point() {
	document.getElementsByName('display')[0].value += ".";
}
function add() {
	document.getElementsByName('display')[0].value += "+";
}
function sub() {
	document.getElementsByName('display')[0].value += "-";
}
function multi() {
	document.getElementsByName('display')[0].value += "*";
}
function div() {
	document.getElementsByName('display')[0].value += "/";
}
function pow2() {
	var tmp = document.getElementsByName('display')[0].value;
	document.getElementsByName('display')[0].value = "Math.pow("+tmp+", 2)";
}
function sqrt() {
	var tmp = document.getElementsByName('display')[0].value;
	document.getElementsByName('display')[0].value = "Math.sqrt("+tmp+")";
}
function percent() {
	document.getElementsByName('display')[0].value += "/100";
}
function reset() {
	document.getElementsByName('display')[0].value = "";
	document.getElementsByName('result')[0].value = "";
}
function result() {
	var r = eval(document.getElementsByName('display')[0].value);
	document.getElementsByName('display')[0].value = "";
	if (isNaN(r) == true | r == Infinity) {
		document.getElementsByName('result')[0].value = "Error!"
	} else {
		document.getElementsByName('result')[0].value = r;
	}
}

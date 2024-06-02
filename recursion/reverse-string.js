// Hello
function reverseString(str) {
	if (str === "") return "";
	return reverseString(str.substr(1)) + str.charAt(0);
}

const result = reverseString("Hello");
console.log("Result=>", result);

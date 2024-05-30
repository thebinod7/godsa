function checkPalindrome(number) {
	const str = number.toString();
	if (str.length <= 1) return true;
	if (str[0] !== str[str.length - 1]) return false;

	return checkPalindrome(str.slice(1, -1));
}

const result = checkPalindrome(12321);
console.log("Result=>", result);

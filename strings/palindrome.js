// Eg: 12321

function isPalindrome(str) {
	console.log("Input=>", str);
	str.toString();
	let str2 = "";
	for (let i = str.length - 1; i > -1; i--) {
		str2 += str[i];
	}
	return str === str2;
}

// Alternate: str.split("").reverse().join("");
// =======>  ["1","2","1"] => ["1", "2", "1"] => 121

const a = isPalindrome("12321");
console.log({ a });

const b = isPalindrome("1221");
console.log({ b });

const c = isPalindrome("12");
console.log({ c });

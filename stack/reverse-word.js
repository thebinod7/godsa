function reverseWord(word) {
	const split = word.split(" ");
	let stack = [];

	// O(n)
	for (let s of split) {
		stack.push(s);
	}

	let result = "";
	// O(n)
	while (stack.length) {
		let current = stack.pop();
		if (current) {
			result += " " + current;
		}
	}

	return result.trim();
}

const r = reverseWord(" a binod k cha");
console.log("result=>", r);

// Time complexity = O(n) + O(n) = 2 O(n)

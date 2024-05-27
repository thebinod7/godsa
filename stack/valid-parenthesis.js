// Todos:
// Push opening bracket to stack
// Pop closing bracket from stack
// If Popped item does not match with opening, return false;
function checkValid(inputString) {
	const stack = [];

	for (let i = 0; i < inputString.length; i++) {
		let char = inputString[i];
		if (char === "(" || char === "{" || char === "[") {
			stack.push(char);
		} else if (char === ")" || char === "}" || char === "]") {
			if (isEmpty(stack)) return false;
			let top = stack.pop();
			if (
				(char === "(" && top !== ")") ||
				(char === "{" && top !== "}") ||
				(char === "[" && top !== "]")
			) {
				return false;
			}
		}
	}

	return isEmpty(stack);
}

function isEmpty(stack) {
	return stack.length === 0;
}

const result = checkValid("([]{})");
console.log({ result });

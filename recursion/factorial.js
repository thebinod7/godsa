function factorial(n) {
	if (n <= 1) return 1;
	return n * factorial(n - 1);
}

const f = factorial(5);
console.log("result=>", f);

// *NOTE:
// 1. Add items to call stack until base case is reached
// 2. Backtrack call stack with base case result

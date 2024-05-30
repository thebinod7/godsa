// 1 => 3 [1,2,3]
// [1,3]
function generateNums(start, end) {
	if (end < start) return [];

	// Push to call stack only
	const nums = generateNums(start, end - 1);
	nums.push(end);
	return nums;
}

const result = generateNums(1, 3);
console.log("Result=>", result);

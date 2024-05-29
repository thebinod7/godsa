// O(logn) time complexity
function mergeSort(arr) {
	if (arr.length <= 1) return arr; // Base case
	const mid = Math.floor(arr.length / 2);

	const left = mergeSort(arr.slice(0, mid));
	const right = mergeSort(arr.slice(mid));

	return merge(left, right);
}

// O(n) time complexity
function merge(left, right) {
	let sorted = []; // O(n) space complexity
	while (left.length && right.length) {
		if (left[0] < right[0]) {
			sorted.push(left.shift());
		} else sorted.push(right.shift());
	}

	return [...sorted, ...left, ...right];
}

const result = mergeSort([3, 8, 5, 4, 7, 6, 1, 2]);
console.log("result=>", result);

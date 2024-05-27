// Todos:
// 1. Take a pivot element [Initial element]
// 2. Create left array with smaller than pivot
// 3. Create right array with greater than pivot
function quickSort(arr) {
	if (arr.length <= 1) {
		return arr;
	}

	const pivot = arr[0];
	let left = [];
	let right = [];

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] < pivot) left.push(arr[i]);
		else right.push(arr[i]);
	}

	return [...quickSort(left), pivot, ...quickSort(right)];
}

const result = quickSort([1, 2, 3, 5, 9, 7, 3, 0]);
console.log("Result=>", result);

// ========Time Complexity=======
// O(n)^2

// ========Space Complexity=======
// O(n)

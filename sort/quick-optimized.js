function sortArray(arr) {
	return quickSort(arr);
}

function quickSort(arr, left = 0, right = arr.length - 1) {
	if (left < right) {
		const pivotIndex = findPivotIndex(arr, left);
		quickSort(arr, left, pivotIndex - 1);
		quickSort(arr, pivotIndex + 1, right);
	}
	return arr;
}

function findPivotIndex(arr, left) {
	let pivot = arr[left];
	let pivotIndex = left;

	for (let i = left + 1; i < arr.length; i++) {
		if (arr[i] < pivot) {
			pivotIndex++;
			swap(arr, pivotIndex, i);
		}
	}

	swap(arr, left, pivotIndex);
	return pivotIndex;
}

function swap(arr, i, j) {
	let temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}

const result = sortArray([5, 2, 3, 1]);
console.log("Result=>", result);

// Time Complexity
// O(n log(n))

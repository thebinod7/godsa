// 1. Take one key element and compate each item
// 2. If item is > key swap

const input = [29, 10, 14, 37, 38, 8, 11];
function insertionSort(arr) {
	const len = arr.length;

	for (let i = 0; i < len; i++) {
		let key = arr[i];
		let j = i - 1;
		while (j >= 0 && arr[j] > key) {
			arr[j + 1] = arr[j];
			j--;
		}

		arr[j + 1] = key;
	}

	return arr;
}

const r = insertionSort(input);
console.log("R=>", r);

// ===== Time Complexity O(n^2)  =====
// ===== Space Complexity O(1)  =====

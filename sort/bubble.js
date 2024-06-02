// Check and swap two consecutive elements

const input = [14, 10, 14, 9, 27];

function bubbleSort(arr) {
	const len = arr.length;
	for (let i = 0; i < len; i++) {
		for (j = 0; j < len - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
			}
		}
	}
	return arr;
}

const r = bubbleSort(input);
console.log("Result=>", r);

// ===== Time Complexity O(n^2)  =====
// ===== Space Complexity O(1)  =====

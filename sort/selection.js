// Select min element and swap

const input = [29, 10, 14, 37, 14];

function selectionSort(arr) {
	const len = arr.length;

	for (let i = 0; i < len; i++) {
		let minIndex = i;
		for (let j = i + 1; j < len; j++) {
			if (arr[j] < arr[minIndex]) {
				minIndex = j;
			}
		}

		if (minIndex !== i) {
			[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
		}
	}

	return arr;
}

const r = selectionSort(input);

console.log("Result=>", r);

// ===== Time Complexity O(n^2)  =====
// ===== Space Complexity O(1)  =====

function rotateByK(arrInput, k) {
	const size = arrInput.length;
	if (k > size) {
		k = k % size;
	}
	reverse(arrInput, 0, size - 1);
	console.log("1st reverse: ", arrInput); // Time complexity: O(n)
	reverse(arrInput, 0, k - 1);
	console.log("2nd reverse: ", arrInput); // Time complexity: O(k)
	reverse(arrInput, k, size - 1);
	console.log("3rd reverse: ", arrInput); // Time complexity: O(n-k)
	return arrInput;
}

// Similar to sort operation
function reverse(nums, left, right) {
	while (left < right) {
		let temp = nums[left];
		nums[left] = nums[right];
		nums[right] = temp;
		left++;
		right--;
	}
}

const result = rotateByK([1, 2, 3, 4, 5, 6], 3);
console.log("Rotated array is: ", result); // Time complexity: O(n

// ==========OPERATIONS============
// [6,5,4,3,2,1] [0-size-1]
// [4,5,6,3,2,1] [0-k-1]
// [4,5,6,1,2,3] [k-size-1]

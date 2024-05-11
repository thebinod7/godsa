const sample = [1, 1, 1, 2, 3, 4, 5, 5];

// Keep it in same order
// Dont' use extra space

function removeDups(inputArr) {
	for (let i = 0; i < inputArr.length - 1; i++) {
		if (inputArr[i] === inputArr[i + 1]) {
			inputArr.splice(i, 1); // Time complexity: O(1)
			i--;
		}
	}
	return inputArr.length;
}

const result = removeDups(sample); // Time complexity: O(n) + O(1) = O(n)
console.log("ResultArray: ", result); //

// ===============================================
function removeDupsWithoutArraMethod(nums) {
	let i = 0;
	for (j = 1; j < nums.length; j++) {
		if (nums[i] !== nums[j]) {
			i++;
			nums[i] = nums[j];
		}
	}
	return i + 1;
}

console.log("ResultNonArray: ", removeDupsWithoutArraMethod(sample)); // Time complexity: O(n)

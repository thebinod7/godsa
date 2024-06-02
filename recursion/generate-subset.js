// 1. Number of subsets = 2^n | Eg: [1,2,3] = 2^3
// Use inclusion and exclusion for subset generation
function subsets(nums) {
	let result = [];
	let temp = [];

	recursiveSubsets(nums, 0);

	function recursiveSubsets(nums, i) {
		console.log("Temp=>", temp);
		if (i === nums.length) {
			return result.push([...temp]);
		}

		temp.push(nums[i]);
		recursiveSubsets(nums, i + 1);
		temp.pop();
		recursiveSubsets(nums, i + 1);
	}
	return result;
}

const result = subsets([1, 2, 3]);
console.log("Result=>", result);

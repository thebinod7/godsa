const fruits = ["banana", "mango", "carrot", "apple", "papaya"];

const nums = [1, 3, 5, 2, 4, 7];

const r1 = fruits.sort();
console.log("R1=>", r1);

const r2 = nums.sort(compareData);
console.log("R2=>", r2);

function compareData(a, b) {
	// 1. if a-b = 0; Return a
	// 2. if a-b > 0; Return b
	// 3. if a-b < 0; Do nothing
	return a - b; // For desc: b-a
}

const input = [1, 2, 3, 4, 5];
function multiplyElements(arr) {
	if (arr.length < 1) {
		return 1;
	} else {
		return arr[arr.length - 1] * multiplyElements(arr.slice(0, arr.length - 1));
	}
}

const mul = multiplyElements(input);
console.log("mul=>", mul);

function sumElements(arr) {
	if (!arr.length) return 0;
	return arr[arr.length - 1] + sumElements(arr.slice(0, arr.length - 1));
}

const sum = sumElements(input);
console.log("sum=>", sum);

function countElements(arr) {
	if (!arr.length) return 0;
	else {
		return 1 + countElements(arr.slice(1));
	}
}

const count = countElements(input);
console.log("count==>", count);

// countElements([1, 2, 3, 4, 5])
//   => 1 + countElements([2, 3, 4, 5])
//       => 1 + countElements([3, 4, 5])
//           => 1 + countElements([4, 5])
//               => 1 + countElements([5])
//                   => 1 + countElements([])
//                       => 0
//                   => 1 + 0 => 1
//               => 1 + 1 => 2
//           => 1 + 2 => 3
//       => 1 + 3 => 4
//   => 1 + 4 => 5
// => 5

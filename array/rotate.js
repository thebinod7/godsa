const SAMPLE = [1, 2, 3, 4, 5, 6];
const ROTATION_KEY = 2;

function rotateByK(arrInput, k) {
  const size = arrInput.length;
  if (k > size) k = k % size;

  reverse(arrInput, 0, size - 1);
  console.log("Reverse entire array: ", arrInput); // Time complexity: O(n)
  reverse(arrInput, 0, k - 1);
  console.log("Reverse first part : ", arrInput); // Time complexity: O(k)
  reverse(arrInput, k, size - 1);
  console.log("Reverse second reverse: ", arrInput); // Time complexity: O(n-k)
  return arrInput;
}

// Similar to sort operation
function reverse(nums, start, end) {
  while (start < end) {
    let temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
}

const result = rotateByK(SAMPLE, ROTATION_KEY);
console.log("Ratation key: ", ROTATION_KEY);
console.log("Rotated array: ", result); // Time complexity: O(n

// ==========OPERATIONS============
// [6,5,4,3,2,1] [0-size-1]
// [4,5,6,3,2,1] [0-k-1]
// [4,5,6,1,2,3] [k-size-1]

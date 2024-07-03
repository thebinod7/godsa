const inputArr = [3, 23, 44, 3, 34, 23, 44, 22];

function findSecondLargest(arr) {
  let largest = -1;
  let secondLargest = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] !== largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

const result = findSecondLargest(inputArr); // Time complexity: O(n)
console.log("Second largest number is: ", result);

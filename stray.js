// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)
// Examples

// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {
  let result = {};
  numbers.reduce((acc, ele) => {
    if (ele in result) {
      result[ele] += 1;
    } else {
      result[ele] = 1;
    }
  }, result);
  for (let key in result) {
    if (result[key] === 1) return +key;
  }
}

console.log(stray([2, 1, 1]));

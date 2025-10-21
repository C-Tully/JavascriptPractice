/**
 * Given five positive integers, find the minimum and maximum values that can be
 *
 * calculated by summing exactly four of the five integers.
 *
 *  Then print the respective minimum and maximum values as a single line of two space-separated long integers.
 */

// E.G arr = [1,3,5,7,9]
//Minimum sum = 16  (1+3+5+7)
//Maximum sum = 24 (3 +5 +7 + 9)

function miniMaxSum(arr) {
  const total = arr.reduce((acc, curr) => acc + curr, 0);

  const min = Math.min(...arr);
  const max = Math.max(...arr);

  const minSum = total - max;
  const maxSum = total - min;

  console.log(minSum, maxSum);
}

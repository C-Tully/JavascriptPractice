//TODO::

/**
 * Calculate the ratio's of an arrays elements that are
 * positive/negative/zero
 * Return: print the decimal value of each fraction on a new line with 6 places after the decimal
 *
 * Example input: arr = [1,1,0,-1,-1];
 * there are n = 5 elements and two positive, two negative, one zero. Their ratios are
 * 2/5 - 0.400000
 */

function plusMinus(arr) {
  // Write your code here
  //1. count number of positive/negative/0's within the array.
  const counts = {
    p: 0,
    n: 0,
    z: 0,
  };
  for (const num of arr) {
    if (num > 0) {
      counts.p++;
    } else if (num < 0) {
      counts.n++;
    } else {
      counts.z++;
    }
  }
  console.log((counts.p / arr.length).toFixed(6));
  console.log((counts.n / arr.length).toFixed(6));
  console.log((counts.z / arr.length).toFixed(6));
}

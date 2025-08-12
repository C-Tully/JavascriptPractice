/**
 * In this challenge, you need to calculate and print the sum of elements in an array, considering that some integers may be very large.

Function Description

Complete the  function with the following parameter(s):

: an array of integers
Return long: : the sum of the array elements

: the sum of the array elements
Input Format

The first line of the input consists of an integer `n`.
The next line contains `n` space-separated integers contained in the array.

Output Format: Return the integer sum of the elements in the array.


Constraints

smaple input: /
STDIN                                                   Function
-----                                                   --------
5                                                       arr[] size n = 5
1000000001 1000000002 1000000003 1000000004 1000000005  arr[...]  
 */

function aVeryBigSum(ar) {
  // Write your code here
  const result = ar.reduce((a, b) => a + b);
  return result;
}

/**
 * Given a square matrix, calculate the absolute difference between the sums of its diagonals.
 *For example, the square matrix  arr is shown below:
 123
 456
 789

 The left-to-right diagonal = 1 + 5 + 9 = 15 .
The right-to-left diagonal =  3 + 5 + 9 = 17.
Their absolute difference is  15 - 17 = -2.

Function description

Complete the diagonalDifference function with the following parameter:

int:arr[n][m]: a 2-D array of integers
Return
int: the absolute in sums along the diagonals
: the absolute difference in sums along the diagonals
Input Format

The first line contains a single integer, , the number of rows and columns in the square matrix .
Each of the next  lines describes a row, , and consists of  space-separated integers .
 */

/**
 *
 * @param {*} arr
 * n[0] = number of rows and columns in the square matrix arr
 

STDIN      Function
-----      --------
3           arr[][] sizes n = 3, m = 3
11 2 4     arr = [
            [11, 2, 4], 
            [4, 5, 6], 
            [10, 8, -12]
          ]
4 5 6
10 8 -12
 */

// We will need to increment each moe through the next row
//getting left to right we take the for loops value and +1
// getting the right ot left we take the lenght -1
function diagonalDifference(arr) {
  let ltrSum = 0;
  let rtlSum = 0;
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    ltrSum += arr[i][i]; // left-to-right diagonal
    rtlSum += arr[i][n - 1 - i]; // right-to-left diagonal
  }

  return Math.abs(ltrSum - rtlSum);
}

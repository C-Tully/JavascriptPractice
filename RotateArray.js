/**Rotate Array
Difficulty: Medium
Topics: Companies


Given an integer array nums, rotate the array to the right by k steps, where k is non-negative. 

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
 

Constraints:

1 <= nums.length <= 105
-231 <= nums[i] <= 231 - 1
0 <= k <= 105
 

Follow up:

Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
Could you do it in-place with O(1) extra space?

[1,2,3,4,5,6,7], k = 3
**/

/**
 * First attempt: The original thought process around this was that I needed to move
 * the values over in a one at a time shuffle and when we determined that we were
 * hitting the arrays length, we needed to use a temp copy to pass values into the correct route
function rotate(nums, k) {
  if (typeof k !== "number" || k <= -1) {
    throw new Error("The value of K must be a number and greater than -1");
  }  
  const numsLength = nums.length; 

  for (let i = 0; i <= numsLength; i++) {

    const tempcopy = nums;


      console.log("Number moving right will be:", nums[i]);
      if (i++ > numsLength) {
        //rollover
        nums[0] = tempcopy[tempcopy.length];
        nums[i] = tempcopy[i - 1];
      } else {
        nums[i + 1] = nums[i];
      }
    }
  } 
*/

//Final refactored version, with notes

function rotate(nums, k) {
  const n = nums.length;

  /**
   * Note: Handle cases where k > n  We use Modular arithmetic here by using the remainder assignment operation.
   * by using  k % n  we ensure the rotation works even if k is greater than the array length.
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder_assignment
   * x %= y is equivalent to x = x % y, except that the expression x is only evaluated once.
   * Inspiration for this came from chat GPT to be honest. I was originally just doing a length check
   */
  k %= n;

  //Refactored return from original type check :: this is just a simple refactor to reduce the total of characters
  if (k === 0 || n <= 1) return; // No need to rotate if k is 0 or array length is 1

  // Reverse function for in-place reversal
  // Helper variable, some what the core of the function
  // This function will take in a start/end value and take the passed in
  // nums array value and rotate it's elements
  // The key to handle this comes from it's usage (see belowe)
  const reverse = (start, end) => {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
  };

  // Perform the three-step reversal
  reverse(0, n - 1); // Reverse entire array
  reverse(0, k - 1); // Reverse first k elements
  reverse(k, n - 1); // Reverse remaining elements
}

/**
 * 
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, 
representing the number of elements in nums1 and nums2 respectively.
Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1.

To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, 
and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

Example 1:
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
*/

/**
 *  Notes
 * Key things to think of here, firstly we are relying on passby value in this problem. This allows us
 * to stick to a non-pure function (A pure function is a function that always returns the same output given a specific input.)
 * As we are wanting to mutate the original array passed in.
 * We HAVE to reassign each value in the array as if we did a = b  we are overwriting the original array, and therefore
 * breaking the passBy reference.
 * The simplest way to do this is that we are to make a new array based on the original one, do what we need to
 * and then pass the new values into the original array via index and there by giving the original array the desired values.
 * Special note: The original code was working up until the final test case, it failed because we didn't take into acccount if the nums2 was an empty array
 * because of this, the filter line was removing a value from the combined Array which resulted in a incorrect overriding which in case
 * left us with overriding only 99 elements but the nums1 was 100 there fore only 99/100 was being replaced, leaving us with a incorrect final array.
 */

/*
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

const merge = function (nums1, m, nums2, n) {
  let combinedArray = [...nums1.slice(0, m), ...nums2];

  if (nums2.lenght > 0) combinedArray = combinedArray.filter((num) => num != 0);

  for (let i = 0; i < combinedArray.length; i++) {
    nums1[i] = combinedArray[i];
  }

  nums1.sort((a, b) => a - b);
};

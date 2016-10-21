/*
* House Robber
* LeetCode - Easy - https://leetcode.com/problems/house-robber/
*/

function rob(nums) {
  if (nums === undefined || nums.length === 0) 
    return 0;

  var maxOdd = 0;
  var maxEven = 0;

  for (var i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      maxOdd = Math.max(maxOdd + nums[i], maxEven);
    } else {
      maxEven = Math.max(maxEven + nums[i], maxOdd);
    }
  }

  return Math.max(maxOdd, maxEven);
}

console.log(rob([1,5,8,7,100,25]));

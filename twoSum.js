/*
* TwoSum
* Author: Michael Alicea
* LeetCode Challenge - https://leetcode.com/problems/two-sum/
* Total time ~20 minutes
*/

/**
* "Naive" Solution, Took ~5 minutes
* Runtime: O(n^2)
*
* @param {number[]} nums
* @param {number} target
* @return {number[]}
*/
var twoSum = function(nums, target) {
  for (var i = 0; i < nums.length; i++) {
    for (var j = i+1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2,1,9,4,4,56,90,3], 8));

/**
* Improved Solution, ~15 minutes
* Runtime: O(n)
*
* @param {number[]} nums
* @param {number} target
* @return {number[]}
*/
var twoSumImproved = function(nums, target) {
  var map = { };
  for (var i = 0; i < nums.length; i++) {
    var complement = target - nums[i];
    if (map[complement] !== undefined) {
      return [map[complement], i];
    }
    map[nums[i]] = i;
  }
};

console.log(twoSumImproved([2, 7, 11, 15], 9));
console.log(twoSumImproved([2,1,9,4,4,56,90,3], 8));

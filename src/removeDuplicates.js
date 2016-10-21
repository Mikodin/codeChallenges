// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
var removeDuplicates = function(nums) {
  if (nums === undefined) {
    return 0;
  }

  for (var i = 1; i < nums.length; i++) {
    if (nums[i-1] === nums[i]) {
      nums.splice(i-1,1);
      i--;
    }
  }

  return nums
}

console.log(removeDuplicates([1,1,2]));
console.log(removeDuplicates([1,1,1,1,2,3,4,5,6,6,6,7,7,8]));
console.log(removeDuplicates([1,2]));

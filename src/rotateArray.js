/*
* Rotate Array by k steps to the right
* (Easy) https://leetcode.com/problems/rotate-array/
*/

/*
* Naive solution
*/
function naiveRotateArray(nums, k) {
  for (var i = 0; i < nums.length; i++) {
    var swap = (i+1) + k;
    if (swap < nums.length) {
      var temp = nums[i];
      nums[i] = nums[swap];
      nums[swap] = temp;
    } else {
      nums.push(i+1);
      var tempArr = nums.splice(i+1, nums.length);
      nums = nums.splice(0,i);
      nums = nums.concat(tempArr);
      return nums;
    }

  }

  return nums;
}

console.log(naiveRotateArray([1,2,3,4,5,6,7], 3));

function inPlaceRotateArray(nums, k) {
  var tmp = nums.splice(0, k+1);
  nums.push.apply(nums, tmp);
}

var arr = [1,2,3,4,5,6,7];
console.log(inPlaceRotateArray(arr, 3));
console.log(arr);

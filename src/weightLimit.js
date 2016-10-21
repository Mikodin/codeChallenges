/*
* Merging 2 Packages
*
* Given a package with a weight limit and an array arr of item weights, 
* how can you most efficiently find two items with sum of weights that equals the weight limit?
*
* Your function should return 2 such indices of item weights or -1 if such pair doesn't exist.
* What is the runtime and space complexity of your solution?
*/

var array = [1,2,5,3,8,15,7,2,10];
var weightLimit = 25;

/*
 * Naive Solution
 * Runtime O(n^2)
 * Space Complexity O(n)
 */
function mergePackagesNaive(arr, limit) {
  for (var i = 0; i < arr.length; i++){
    for (var j = 0; j < arr.length; j++){
      if (arr[i] + arr[j] === limit) {
        return [i, j];
      }
    }
  }
}

console.log(mergePackagesNaive(array, weightLimit));

/*
 * Ideal Solution
 * Runtime O(n)
 * Space Complexity O(m), m is the number of unique weights in the array
 */
function mergePackages(arr, limit) {
  var map = new Map();

  for (var i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      return [map.get(arr[i]), i];
    }
    map.set(limit-arr[i], i);
  }
}

console.log(mergePackages(array, weightLimit));

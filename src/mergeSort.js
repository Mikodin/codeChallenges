/*
* JS MergeSort implementation
*/
var arr = [11,14,33,27,10,35,19,42,44];

function mergeSort(arr) {
  var length = arr.length;
  if (length === 1) 
    return arr;

  var l1 = arr.splice(0, arr.length/2);
  var l2 = arr;

  l1 = mergeSort(l1);
  l2 = mergeSort(l2);

  return merge(l1, l2);
}

function merge(a1, a2) {
  var finalArr = [];

  while (a1.length >= 1 && a2.length >= 1) {
    if (a1[0] > a2[0]) {
      finalArr.push(a2[0]);
      a2.splice(0, 1);
    } else {
      finalArr.push(a1[0]);
      a1.splice(0, 1);
    }
  }

  while (a1.length >= 1) {
    finalArr.push(a1[0]);
    a1.splice(0,1);
  }
  while (a2.length >= 1) {
    finalArr.push(a2[0]);
    a2.splice(0,1);
  }

  return finalArr;
}

console.log(mergeSort(arr));

























































/*
* LeetCode (Easy) https://leetcode.com/problems/valid-palindrome/
*/

/*
* @param {string} str
* @return {boolean}
*/
function isPalindrome(str) {
  if (str === undefined) return true;
  str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  for (var i = 0; i < str.length / 2; i++) {
    var j = (str.length - 1) - i;
    if (str[i] !== str[j])
      return false;
  }
  return true
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("ab"));
console.log(isPalindrome("0b"));



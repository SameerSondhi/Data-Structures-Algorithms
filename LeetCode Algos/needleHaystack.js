// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  let needleLength = needle.length;
  let haystackLength = haystack.length;
  
  for (let i = 0; i <= haystackLength - needleLength; i++) {
    if (needle === haystack.slice(i, i + needleLength)) {
      return i;
    }
  }
  
  return -1;
};

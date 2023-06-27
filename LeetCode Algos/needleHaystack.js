// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let needleLength = needle.length
    let haystackLength = haystack.length
    for(let i=0; i<haystack.length; i++){
    if(needle === haystack.slice(i, needleLength)){
        return i;
    }
    else{
        return -1
    }
    }
};
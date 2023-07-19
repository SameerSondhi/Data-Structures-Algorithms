/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let hashMap = new Map();
    for(i=0; i<nums.length; i++){
       if(hashMap.has(nums[i])){
           return true
       }
       else{
           hashMap.set(nums[i])
       }
    }
    return false;
};
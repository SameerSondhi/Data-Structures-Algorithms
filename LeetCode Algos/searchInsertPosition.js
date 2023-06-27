// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    
    let numsLength = nums.length
    for(let i=0; i< nums.length; i++){
        function compareNumbers(a,b){
            return a-b;
        }
        if(nums[i]===target){
            return i
        }
        else{
            nums.sort(compareNumbers)
            if(nums[i]>target){
                return i
            }
        }
    }
    return numsLength
}
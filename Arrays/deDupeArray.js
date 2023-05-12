/* 
  Given a SORTED array of integers, dedupe the array 
  Because array elements are already in order, all duplicate values will be grouped together.
  Ok to use a new array
*/

const nums1 = [1, 1, 1, 1];
const expected1 = [1];

const nums2 = [1, 1, 2, 2, 3, 3];
const expected2 = [1, 2, 3];

const nums3 = [7, 7, 28, 28, 56, 56];
const expected3 = [7, 28, 56];

const nums4 = [1, 1];
const expected4 = [1];

/**
 * De-dupes the given sorted array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {Array<number>} The given array deduped.
 */
function dedupeSorted(sortedNums) {
    //Your code here
    if(sortedNums.length<=1){
        return sortedNums
    }
    //Instantiate a result array
    let result = []
    //Iterate through the array
    for(let i =0; i<sortedNums.length; i++){
        //if nums[i]===nums[i+1]: continue iterating
        if (sortedNums[i]===sortedNums[i+1]){
            continue
        }
         //if not the same, push nums[i] into result array
        else{
            result.push(sortedNums[i])
        }
        //if nums[i+1] == undefined: 
       
    }
        return result
}

console.log(dedupeSorted(nums1)); // [1]
console.log(dedupeSorted(nums2)); // [1, 2, 3]
// console.log(dedupeSorted(nums3)); // [7, 28, 56]
console.log(dedupeSorted(nums4)); // [1]

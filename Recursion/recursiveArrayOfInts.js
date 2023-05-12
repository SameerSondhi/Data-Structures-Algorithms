/* 
  Recursively sum an arr of ints
*/

const numsA = [1, 2, 3];
const expectedA = 6;

const numsB = [1];
const expectedB = 1;

const numsC = [];
const expectedC = 0;

/**
 * Add params if needed for recursion <-------
 * Recursively sums the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The sum of the given nums.
 */
function sumArr(nums, i=0) {
    //Base Case
    if(nums[i]===undefined){
        return 0
    }
    return nums[i] + sumArr(nums, i=i+1)
}
// 1 + sumArr(nums, 1) --> 2 + sumArr(nums, 2) --> 3 + sumArr(nums, 3)
//         1, 2, 3

console.log(sumArr(numsA)) // 6
console.log(sumArr(numsB)) // 1
console.log(sumArr(numsC)) // 0
/* 
  Given two arrays, interleave them into one new array.
  The arrays may be different lengths. The extra items should be added to the
  back of the new array.
*/

const arrA1 = [1, 2, 3];
const arrB1 = ["a", "b", "c"];
const expected1B = [1, "a", 2, "b", 3, "c"];

const arrA2 = [1, 3];
const arrB2 = [2, 4, 6, 8];
const expected2B = [1, 2, 3, 4, 6, 8];

const arrA3 = [1, 3, 5, 7];
const arrB3 = [2, 4];
const expected3B = [1, 2, 3, 4, 5, 7];

const arrA4 = [];
const arrB4 = [42, 0, 6];
const expected4B = [42, 0, 6];

/**
 * Interleaves two arrays into a new array. Interleaving means alternating
 * the items starting from the first array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} arr1
 * @param {Array<any>} arr2
 * @returns {Array<any>} A new array of interleaved items.
 */
function interleaveArrays(arr1, arr2) {
    //Two flags instantiated to 0
    let flag1=0;
    let flag2=0;
    //Your code here
    //Create a result array
    let result = []
    if(arr1.length===0){
        return arr2
    }
    if(arr2.length===0){
        return arr1
    }
    
    //While loop --> i<arr1.length, j<arr2.length
    while(flag1<arr1.length || flag2<arr2.length){
        if(arr1[flag1]){
            result.push(arr1[flag1])
            flag1++
        }
        if(arr2[flag2]){
            result.push(arr2[flag2])
            flag2++
        }
    }
    return result
}

console.log(interleaveArrays(arrA1, arrB1)); //  [1, "a", 2, "b", 3, "c"];
console.log(interleaveArrays(arrA2, arrB2)); // [1, 2, 3, 4, 6, 8];
console.log(interleaveArrays(arrA3, arrB3)); // [1, 2, 3, 4, 5, 7];
console.log(interleaveArrays(arrA4, arrB4)); // [42, 0, 6];
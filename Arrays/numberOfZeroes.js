//Given an array of 1s and 0s which has all 1s first followed by all 0s. Find the number of 0s. Count the number of zeroes in the given array.
let arr1 = [1, 1, 1, 1, 0, 0]
// Output: 2

let arr2 = [1, 0, 0, 0, 0]
// Output: 4

let arr3 = [0, 0, 0]
// Output: 3

let arr4 = [1, 1, 1, 1]
// Output: 0

function zeroes(arr){
    let counter =0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]==0){
            counter++;
        }
        
    }
    return counter
}
console.log(zeroes(arr3))
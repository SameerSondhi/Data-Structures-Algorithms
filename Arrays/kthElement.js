//Given two sorted arrays of size m and n respectively, you are tasked with finding the element that would be at the k’th position of the final sorted array.

let array1=[2, 3, 6, 7, 9]
let array2=[1, 4, 8, 10]
// k = 5
// Output : 6

function elementK(arr1, arr2, k){
    let sortedArray=[...arr1, ...arr2]
    let element = 0
    console.log(sortedArray.sort((a,b)=> a-b))
    for(let i =0; i<sortedArray.length;i++){
        if(k>sortedArray.length){
            return null
        }
        element = sortedArray[k-1]
    }
    return element
}
console.log(elementK(array1, array2, 6))


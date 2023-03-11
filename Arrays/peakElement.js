//BINARY SEARCH
//Given an array arr[] of integers. Find a peak element i.e. an element that is not smaller than its neighbors. 

let array1= [5, 10, 20, 15]
// Output: 20
// Explanation: The element 20 has neighbors 10 and 15, both of them are less than 20.


array2 = [10, 20, 15, 2, 23, 90, 67]
// Output: 20 or 90
// Explanation: The element 20 has neighbors 10 and 15, both of them are less than 20, similarly 90 has neighbors 23 and 67.

function peakElement(array){
    let answer=[];
    if (array.length<2){
        return null;
    }
    for(let i = 0; i<array.length;i++){
        if(array[i]>array[i-1] && array[i]>array[i+1]){
            answer.push(array[i]);
        }
    }
    return answer
}
console.log(peakElement(array2))
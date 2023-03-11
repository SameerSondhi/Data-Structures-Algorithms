//Given an array arr of N elements,  A majority element in an array arr of size N is an element that appears more than N/2 times in the array. 
//The task is to write a function say isMajority() that takes an array (arr[] ), array’s size (n) and a number to be searched (x) as parameters and returns true if x is a majority element (present more than n/2 times).

let arr1 = [1, 2, 3, 3, 3, 3, 10]
// Output: True (x appears more than n/2 times in the given array)

// Input: arr[] = {1, 1, 2, 4, 4, 4, 6, 6}, x = 4
// Output: False (x doesn't appear more than n/2 times in the given array)

// Input: arr[] = {1, 1, 1, 2, 2}, x = 1
// Output: True (x appears more than n/2 times in the given array)

function isMajority(arr, x){
    let answer = false;
    let counter = 0;
    for(let i =0; i<arr.length; i++){
        if(x == arr[i]){
        console.log("This is x in the array: " + arr[i])
        counter++;
        console.log("Counter: " + counter)
        console.log("The length in question: " +arr.length/2)
    }
    if(counter>((arr.length)/2)){
        console.log(arr.length/2)
        answer=true;
    }
}
    return answer;
}
console.log(isMajority(arr1,3))
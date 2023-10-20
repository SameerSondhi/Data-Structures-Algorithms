function plusMinus(arr) {
    // Write your code here
const length = arr.length;
let countNeg = 0;
let countZero = 0;
let countPos = 0;
for(let i = 0; i<length; i++){
    if(arr[i]<0){
        countNeg++
    }
    else if(arr[i]===0){
        countZero++
    } else{
        countPos++
    }
}
console.log((countPos/length).toFixed(6))
console.log((countNeg/length).toFixed(6))
console.log((countZero/length).toFixed(6))
}
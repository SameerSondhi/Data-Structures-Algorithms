function miniMaxSum(arr) {
    // Write your code here
   let sums = [];
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = 0; j < arr.length; j++) {
            if (i !== j) {
                sum += arr[j];
            }
        }
        sums.push(sum);
    }
    console.log(Math.min(...sums)+ ' ' + Math.max(...sums))
}

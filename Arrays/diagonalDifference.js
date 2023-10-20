function diagonalDifference(arr) {
    // Write your code here
    let sum1 = 0
    // arr[0][0]+arr[1][1]+arr[2][2]
    let sum2 = 0 
    // arr[0][2]+ arr[1][1]+arr[2][0]
    for(let i = 0; i<arr.length; i++){
        sum1+=arr[i][i]
        sum2+=arr[i][arr.length-1-i]
    }
    let difference = Math.abs(sum1-sum2)
    return difference
}
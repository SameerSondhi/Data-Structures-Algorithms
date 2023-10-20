function median(arr){
    let newArr = arr.sort((a,b)=> a-b)
    let firstHalf = 0
    let secondHalf = newArr.length-1
    console.log(newArr)
    while(firstHalf!==secondHalf){
        firstHalf++
        secondHalf--
    }
    return newArr[firstHalf]
}


let array = [1,3,5,6,2,4,7]
console.log(median(array))
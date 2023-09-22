let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

function isVowel(char){
    return vowels.includes(char)

}
var reverseVowels = function(s) {
    let splitString = s.split("") // ['h'. 'e', 'l', 'l', 'o']
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let leftIndex = 0
    let rightIndex = splitString.length-1
    console.log(splitString)
    while(leftIndex<rightIndex){
        while(leftIndex<rightIndex && !isVowel(splitString[leftIndex])){
            leftIndex++
        }
        while(leftIndex<rightIndex && !isVowel(splitString[rightIndex])){
            rightIndex--
        }
        [splitString[leftIndex], splitString[rightIndex]] = [splitString[rightIndex], splitString[leftIndex]]

        leftIndex++
        rightIndex--
    }
    return splitString.join('')
    
};

console.log(reverseVowels("hello"))
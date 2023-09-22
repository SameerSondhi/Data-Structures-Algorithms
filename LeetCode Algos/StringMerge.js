var mergeAlternately = function(word1, word2) {
    let array1=[], array2 = []
    let newString = ''
    array1 = (word1.split(''))
    array2 = (word2.split(''))
    
    console.log(array1)
    console.log(array2)
    const correctLength = Math.min(array1.length, array2.length);
    for(let k = 0; k<correctLength; k++){
        newString += array1[k]+array2[k]
        console.log(newString)
    }
    // Append any remaining characters from the longer word
    if (array1.length > correctLength) {
        newString += array1.slice(correctLength).join('');
    } else if (array2.length > correctLength) {
        newString += array2.slice(correctLength).join('');
    }
    return newString
};

console.log(mergeAlternately("abc", "pqr"))
console.log(mergeAlternately("ab", "pqrs"))
console.log(mergeAlternately("abcd", "pq"))
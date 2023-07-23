/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let trimmedString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    if(trimmedString==""){
        return true
    }
    for(let i = 0; i<trimmedString.length; i++){
            if(!(trimmedString[i]==trimmedString[trimmedString.length-1-i])){
                return false
            }
    }
    return true

};
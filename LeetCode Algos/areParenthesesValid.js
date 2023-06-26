// Given a string of parentheses containing open and closing parentheses, determine if the parentheses are valid
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let open = ['(', '{', '[']
    let closed = [')', '}', ']']
    for(let i=0; i<s.length; i++){
        if(s[i]==open[i] && s[s.length-1-i]==closed[i]){
            return true
        }
        else if(s[i]==open[i] && s[i+1]==closed[i]) {
            return true
        }
    }
    return false

};
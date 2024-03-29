/* 
  String: Rotate String
  Create a standalone function that accepts a string and an integer,
  and rotates the characters in the string to the right by that given
  integer amount.
*/

const str = "Hello World";

const rotateAmnt1 = 0;
const expected1 = "Hello World";

const rotateAmnt2 = 1;
const expected2 = "dHello Worl";

const rotateAmnt3 = 2;
const expected3 = "ldHello Wor";

const rotateAmnt4 = 4;
const expected4 = "orldHello W";

const rotateAmnt5 = 13; 
const expected5 = "ldHello Wor";
/* 
Explanation: this is 2 more than the length so it ends up being the same
as rotating it 2 characters because after rotating every letter it gets back
to the original position.
*/

/**
 * Rotates a given string's characters to the right by the given amount,
 * wrapping characters to the beginning.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @param {number} amnt The amount of characters in the given str to rotate to the
 *    right.
 * @returns {string} The string rotated by the given amount.
 */
function rotateStr(str, amnt) {
    let answer=""
    let rotate_amount=amnt%str.length
        if(amnt%str.length==0 || amnt==0){
            return str
        }
        for(let i = 0;i<str.length-rotate_amount;i++){
            answer=str[i]+answer
    }
        
    for(let i = str.length-1;i>=str.length-rotate_amount;i--){
                answer=answer+ str[i]
        }
        return answer
    }
    str.length-rotate_amount


console.log(rotateStr(str, rotateAmnt1)); // expected: "Hello World"
console.log(rotateStr(str, rotateAmnt2)); // expected: "dHello Worl"
// console.log(rotateStr(str, rotateAmnt3)); // expected: "ldHello Wor"
// console.log(rotateStr(str, rotateAmnt4)); // expected: "orldHello W"
// console.log(rotateStr(str, rotateAmnt5)); // expected: "ldHello Wor"
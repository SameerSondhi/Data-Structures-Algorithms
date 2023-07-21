/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    let result = [];

    while (left < right) {
        const sum = numbers[left] + numbers[right];

        if (sum === target) {
            result.push(left + 1, right + 1);
            return result; // Return if two indices are found
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return result; // Return the found indices, even if less than 2
};
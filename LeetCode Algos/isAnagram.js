/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let lower1 = s.toLowerCase()
    let lower2 = t.toLowerCase()

    let sorted1 = lower1.split("").sort().join("")
    let sorted2 = lower2.split("").sort().join("")

    return sorted1 === sorted2
};
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    n = s.trim().split(" ")
    return (n[n.length-1]).length
};
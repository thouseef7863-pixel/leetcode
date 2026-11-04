/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let  res=""

    for(let i=0; i<s.length; i++){
        let char = s[i].toLowerCase();

        if ((char >= 'a' && char <= 'z') ||(char >= '0' && char <= '9')) {
        res += char;
    }
    }
    let reversed = res.split("").reverse().join("");

    if (res === reversed) {
    return true
} else {
    return false
}


    
};
var isPalindrome = function(x) {
    let str = x.toString()
    let reverseStr = str.split('').reverse().join('')
    
    return str == reverseStr
};
console.log(isPalindrome(121))
function largestPalindromeProduct(maxNum) {
    let maxPalindrome;
    for(let i = 1; i <= maxNum; i++) {
        for(let j = i; j <= maxNum; j++) {
            const product = i * j;
            if(!maxPalindrome || (isPalindrome(product) && product > maxPalindrome)) {
                maxPalindrome = product;
            }
        }
    }
    return maxPalindrome
}

function isPalindrome(str) {
    str = str.toString();
    let comparison = str.split('').reverse().join('')
    return str === comparison
}

console.log(largestPalindromeProduct(999))
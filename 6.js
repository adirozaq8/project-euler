function sumSquareDifference(maxNum) {
    let sumOfSquare = 0;
    let squareOfSum = 0;
    for(let i = 1; i <= maxNum; i++) {
        sumOfSquare += i*i
        squareOfSum += i
    }
    squareOfSum *= squareOfSum;
    return squareOfSum - sumOfSquare
}

console.log(sumSquareDifference(100))
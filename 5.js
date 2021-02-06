function smallestMultiple(maxDivisible) {
    let smallest;
    let num = 1;

    maxDivisible = Math.ceil(maxDivisible)

    while(!smallest) {
        let divisible = 0;
        for(let i = 1; i <= maxDivisible; i++) {
            if(num % i === 0) {
                divisible++
            }
        }
        if(divisible === maxDivisible) {
            smallest = num
        }
        num++
    }
    return smallest
}

function factor(n) {
    const maxMultiple = Math.floor(Math.sqrt(n))
    let arr = []
    for(let i = 1; i <= maxMultiple; i++) {
        if(n % i === 0) {
            arr.push(i)
            arr.push(n/i)
        }
    }
    return arr
}

console.log(smallestMultiple(20))
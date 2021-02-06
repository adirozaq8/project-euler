function sumEvenFibonacci(max) {
    let arr = [1, 2]
    let sumEven = 0
    let i = arr[arr.length-1]
    while(i < max) {
        let a = arr.length-2
        let b = a + 1
        i = arr[a] + arr[b]
        if(i < max) {
            arr.push(i)
            if(i % 2 === 0) {
                sumEven += i
            }
        }
    }
    return sumEven + 2
}

console.log(sumEvenFibonacci(4000000))
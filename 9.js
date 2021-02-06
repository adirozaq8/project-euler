function specialPythagoreanTriplet() {
    const sum = 1000;
    for(let a = 1; a < sum; a++) {
        for(let b = a; b < sum; b++) {
            const edge = Math.pow(a,2) + Math.pow(b,2)
            const c = Math.sqrt(edge)
            if(a+b+c === 1000) {
                return a*b*c
            }
        }
    }
}

console.log(specialPythagoreanTriplet())
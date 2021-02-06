function largestPrimeFactor(num) {
    let maxPrimeFactor;
    const maxLoop = Math.floor(Math.sqrt(num))
    for(let i = 1; i < maxLoop; i++) {
        if(num % i === 0) {
            let factor = [i, num / i];
            factor.forEach(e => {
                if(!maxPrimeFactor || isPrime(e) && e > maxPrimeFactor) {
                    maxPrimeFactor = e;
                }
            })
        }
    }
    return maxPrimeFactor
}

function isPrime(number){
	if (number % 2 !== 0){
		if(number === 1){
			return false
		}
		for (let i = 3; i <= Math.ceil(Math.sqrt(number)); i += 2){
			if(number % i === 0) {
				return false
			}
		}
	} else if (number === 2){
		return true
	} else {
		return false
	}
	return true
}

console.log(largestPrimeFactor(600851475143))
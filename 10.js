function summationOfPrimes(n) {
    let sum = 2;
    for(let i = 3; i < n; i += 2) {
        if(isPrime(i)) {
            sum += i;
        }
    }
    return sum
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

console.log(summationOfPrimes(2000000))
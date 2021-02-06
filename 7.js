function prime(n) {
    let i = 3;
    let totalPrime = 1
    while(totalPrime !== n) {
        if(isPrime(i)) {
            totalPrime++
        }
        i += 2
    }
    return i-2
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

console.log(prime(10001))
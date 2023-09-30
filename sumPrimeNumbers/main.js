function somaNumerosPrimos(n) {
    let sum = 0;
    let count = 0;
    let currentNumber = 2;

    while (count < n) {
        if (verificarPrimo(currentNumber)) {
            sum += currentNumber;
            count++;
        }
        currentNumber++;
    }

    return sum;
}

function verificarPrimo(n) {
    for (let i = 2, sqrt = Math.sqrt(n); i <= sqrt; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return n > 1;
}

console.log(somaNumerosPrimos(5));
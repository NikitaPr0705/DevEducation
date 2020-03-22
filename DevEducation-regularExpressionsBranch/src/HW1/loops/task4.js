let numberToCountFact = 100;

function countFactorial(numberToCountFact) {
    let result = 1;
    for (let i = 1; i <= numberToCountFact; i++) {
        result *= i;
    }
    return result;
}


countFactorial(numberToCountFact);
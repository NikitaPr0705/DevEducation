function countFactorial(n) {
        if (n < 0) 
        console.log('Факториала данного числа не существует');
        let result = 1;
        for (let i = 1; i <= n; i++) {
            result *= i;
        }
        return result;
}


countFactorial(20);
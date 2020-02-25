function task5CountSumOfNum(num) {

    let numToStr = num.toString();
    let sumOfNumbers = 0;
    for (let i = 0; i < numToStr.length; i++) {
        sumOfNumbers += Number(numToStr[i]);
    }
    return sumOfNumbers;
}

task5CountSumOfNum(234454);
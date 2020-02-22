function countSumOfNum(num) {

    let numToStr = num.toString();
    let sumOfNumbers = 0;
    for(let i = 0; i < numToStr.length; i++) {
    sumOfNumbers += Number(numToStr[i]);
}
return sumOfNumbers;
}

countSumOfNum(234454);


function countSumEvenNum() {
  let sumOfEvenNum = 0;
  let countOfEven = 0;
  for (let i = 1; i <= 99; i++) {
    if (i % 2 === 0) {
      sumOfEvenNum += i;
      countOfEven++;
    };
  }
  return `Summ: ${sumOfEvenNum}, quantity: ${countOfEven}`;
};

console.log(countSumEvenNum());
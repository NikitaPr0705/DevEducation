let sumOfEvenNum = 0;
let countOfEven = 0;

function countSumEvenNum() {
  for (let i = 1; i <= 99; i++) {
    if (i % 2 === 0) {
      sumOfEvenNum += i;
      countOfEven++;
    };
  }
  return `Summ: ${sumOfEvenNum}, quantity: ${countOfEven}`;
};

countSumEvenNum();
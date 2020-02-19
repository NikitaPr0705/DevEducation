let testRate;

function rateFunc(testRate) {
if (testRate >= 0 && testRate <= 19) {
  return 'F';
} else if (testRate >= 20 && testRate <= 39) {
  return 'E';
} else if (testRate >= 40 && testRate <= 59) {
  return 'D';
} else if (testRate >= 60 && testRate <= 74) {
  return 'C';
} else if (testRate >= 75 && testRate <= 89) {
  return 'B';
} else if (testRate >= 90 && testRate <= 100) {
  return 'A';
} else {
  return 'Error';
}

}

console.log(rateFunc(70));

window.rateFunc = rateFunc;
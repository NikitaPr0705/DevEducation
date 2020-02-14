let testRate = 100;

if (testRate >= 0 && testRate <= 19) {
  console.log('F');
} else if (testRate >= 20 && testRate <= 39) {
  console.log('E');
} else if (testRate >= 40 && testRate <= 59) {
  console.log('D');
} else if (testRate >= 60 && testRate <= 74) {
  console.log('C');
} else if (testRate >= 75 && testRate <= 89) {
  console.log('B');
} else if (testRate >= 90 && testRate <= 100) {
  console.log('A');
} else {
  console.log('Error');
}
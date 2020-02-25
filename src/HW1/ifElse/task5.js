let testRate5;

function task5RateFunc(testRate5) {
  if (testRate5 >= 0 && testRate5 <= 19) {
    return 'F';
  } else if (testRate5 >= 20 && testRate5 <= 39) {
    return 'E';
  } else if (testRate5 >= 40 && testRate5 <= 59) {
    return 'D';
  } else if (testRate5 >= 60 && testRate5 <= 74) {
    return 'C';
  } else if (testRate5 >= 75 && testRate5 <= 89) {
    return 'B';
  } else if (testRate5 >= 90 && testRate5 <= 100) {
    return 'A';
  } else if (testRate5 > 100) {
    return 'Error, there is too many';
  } else if (testRate5 < 20) {
    return 'Error, there number is too small'
  }

}

task5RateFunc(70);
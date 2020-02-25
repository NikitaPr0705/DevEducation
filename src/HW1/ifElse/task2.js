let first = "first quarter";
let second = "second quarter";
let third = "third quarter";
let fourth = "fourth quarter";


function task2WhichQuarter(x, y) {
  if (x > 0 && y > 0) {
    return first;
  }
  if (x < 0 && y > 0) {
    return second;
  }
  if (x < 0 && y < 0) {
    return third;
  }
  if (x > 0 && y < 0) {
    return fourth;
  }
};

task2WhichQuarter(2, 5);
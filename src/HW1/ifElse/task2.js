let first = "first quarter";
let second = "second quarter";
let third = "third quarter";
let four = "four quarter";


function whichQuarter(x, y) {
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
    return four;
  }
};

whichQuarter(2, 5);
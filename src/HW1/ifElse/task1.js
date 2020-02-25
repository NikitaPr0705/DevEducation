'use strict'
let a1 = 1;
let b1 = 3;



function task1CountSumOrMult(a1, b1) {
  let result1 = 0;
  if (a1 % 2 === 0) {
    result1 = a1 * b1;
  } else {
    result1 = a1 + b1;
  }
  return result1;
};

task1CountSumOrMult(a1, b1);
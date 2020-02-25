'use strict'
function task4CountMax(a, b, c) {
    let sum = a + b + c;
    let multiple = a * b * c;
    if (sum > multiple) {
        return sum + 3;
    } else if (multiple > sum) {
        return multiple + 3;
    };
};

task4CountMax(2, 2, 2);
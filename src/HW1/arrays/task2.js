let arrayTask2Arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];

function task2FindMaxNum(arrayTask2Arr) {
    let arrayTask2ArrMax = Math.max.apply(null, arrayTask2Arr);
    return arrayTask2ArrMax;
}

task2FindMaxNum(arrayTask2Arr);
let arrayTask1Arr = [29, 10, 2, 3, 4, 5, 6, 7, 8];

function task1FindMinNum(arrayTask1Arr) {

    let arrayTask1ArrMin = Math.min.apply(null, arrayTask1Arr);
    return arrayTask1ArrMin;
}

task1FindMinNum(arrayTask1Arr);
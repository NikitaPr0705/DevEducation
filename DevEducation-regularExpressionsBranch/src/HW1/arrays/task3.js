let arrayTask3Arr = [11, 8, 2, 3, 1, 5, 6, 7, 16];

function task3FindIndexMinElem(arrayTask3Arr) {
    let arrayMin = Math.min.apply(null, arrayTask3Arr);

    let arrayMinIndex = arrayTask3Arr.indexOf(arrayMin);

    return arrayMinIndex;
}

task3FindIndexMinElem(arrayTask3Arr);
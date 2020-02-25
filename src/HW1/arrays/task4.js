let arrayTask4 = [11, 1, 2, 3, 8, 5, 6, 7, 16];

function task4FindIndexMaxElem(arrayTask4) {
    let arrayMax = Math.max.apply(null, arrayTask4);

    let arrayMaxIndex = arrayTask4.indexOf(arrayMax);

    return arrayMaxIndex;
}

task4FindIndexMaxElem(arrayTask4);
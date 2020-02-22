let array = [11, 1, 2, 3, 8, 5, 6, 7, 16];

function findIndexMaxElem() {
    let arrayMax = Math.max.apply(null, array);

    let arrayMaxIndex = array.indexOf(arrayMax);

    return arrayMaxIndex;
    }

    findIndexMaxElem(array);


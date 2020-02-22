let array = [11, 8, 2, 3, 1, 5, 6, 7, 16];

function findIndexMinElem() {
let arrayMin = Math.min.apply(null, array);

let arrayMinIndex = array.indexOf(arrayMin);

return arrayMinIndex;
}

findIndexMinElem(array);


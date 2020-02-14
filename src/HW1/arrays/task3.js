let array = [11, 1, 2, 3, 8, 5, 6, 7, 16];

let arrayMin = Math.min.apply(null, array);

let arrayMinIndex = array.indexOf(arrayMin);

console.log(arrayMinIndex);
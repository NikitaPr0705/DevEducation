let array = [0, 1, 2, 3, 4, 5, 6, 7, 8];

function findMaxNum(array) {
let arrayMax = Math.max.apply(null, array);
return arrayMax;
}

findMaxNum(array);
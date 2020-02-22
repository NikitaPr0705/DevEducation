let array = [29, 10, 2, 3, 4, 5, 6, 7, 8];
function findMinNum(array) {

let arrayMin = Math.min.apply(null, array);
 return arrayMin;
}

findMinNum(array);
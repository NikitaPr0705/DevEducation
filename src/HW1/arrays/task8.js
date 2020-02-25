let array = [1, 2, 3, 4, 5, 6];

function reverseHalfOfArr(array) {
    let halfLength = Math.ceil(array.length / 2);
    let result = array.splice(0, halfLength);
    let concatResult = array.concat(result);
    return concatResult;
};

console.log(reverseHalfOfArr(array));

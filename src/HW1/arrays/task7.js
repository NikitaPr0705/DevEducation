let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function countOddElemOfArr(array) {
    let numberOfOddElems = 0;
    for(let i = 0; i < array.length - 1; i++) {
        if(array[i] % 2 !== 0) {
            numberOfOddElems++;
        }
    }
    return numberOfOddElems;
}

console.log(countOddElemOfArr(array));
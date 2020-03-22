let task7Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function task7CountOddElemOfArr(task7Array) {
    let numberOfOddElems = 0;
    for (let i = 0; i < task7Array.length - 1; i++) {
        if (task7Array[i] % 2 !== 0) {
            numberOfOddElems++;
        }
    }
    return numberOfOddElems;
}

task7CountOddElemOfArr(task7Array);
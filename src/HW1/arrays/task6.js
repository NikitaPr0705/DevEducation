let task6Array = [11, 5, 2, 3, 8, 1, 6, 7, 16];

function task6ReverseArray(task6Array) {
    let revArray = [];
    for (let i = task6Array.length - 1; i >= 0; i--) {
        revArray.push(task6Array[i]);
    }
    return revArray;
}

task6ReverseArray(task6Array);
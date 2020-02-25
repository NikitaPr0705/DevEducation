let task5NumbArray = [1, 4, 6, 7, 3, 8, 9, 2, 123, 65, 434];

function task5CountOddIndex(task5NumbArray) {
    let sumOfOddIndex = 0;
    let i = 0;
    for (i = 1; i < task5NumbArray.length; i = i + 2) {
        sumOfOddIndex = sumOfOddIndex + task5NumbArray[i];
    }
    return sumOfOddIndex;
}


task5CountOddIndex(task5NumbArray);

let numbArray = [1, 4, 6, 7, 3, 8, 9, 2, 123, 65, 434];

function countOddIndex(numbArray) {
    let sumOfOddIndex = 0;
    let i=0;
        for (i=1; i<numbArray.length; i=i+2) {
            sumOfOddIndex = sumOfOddIndex + numbArray[i];
        }
        return sumOfOddIndex;
    }


console.log(countOddIndex(numbArray));


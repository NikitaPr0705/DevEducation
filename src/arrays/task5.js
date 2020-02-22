let sumOfOdd = 0;
let numbArray = [1, 4, 6, 7, 3, 8, 9, 2, 123, 65, 434];

function coundOddIndex(numbArray) {
    for(let i = 1; i < numbArray.length; i++)
        if( numbArray[i] % 2 > 0) {
            sumOfOdd += numbArray[i];
            console.log(sumOfOdd);
        } 
        return sumOfOdd;
}

coundOddIndex(sumOfOdd);

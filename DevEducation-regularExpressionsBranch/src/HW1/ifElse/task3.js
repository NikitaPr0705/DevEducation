let arr3 = [-3, 5, 2];

function task3ArrayPosNum(arr3) {
    let sum3 = 0;
    for (let i = 0; i < arr3.length; i++) {
        if (arr3[i] > 0) {
            let positive3 = arr3[i];
            sum3 += positive3;
        }
    }
    return sum3;
}
task3ArrayPosNum(arr3);
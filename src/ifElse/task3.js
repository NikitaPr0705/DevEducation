let arr = [3,5,-2];

function arrayPosNum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (arr[i] > 0) {
            let positive = arr[i];
            sum += positive;
        }
    }
    console.log(sum);
}
arrayPosNum(arr);

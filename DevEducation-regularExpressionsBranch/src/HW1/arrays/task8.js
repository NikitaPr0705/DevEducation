let task8Array = [1, 2, 3, 4, 5, 6, 7];

function task8HalfOfArr(task8Array) {

    let resultArrayTask8 = task8Array;

    if (task8Array.length % 2 === 0) {
        let halfArray = task8Array.length / 2;
        for (let i = 0; i < halfArray; i++) {
            arrayTemp = task8Array[i];
            task8Array[i] = task8Array[halfArray + i];
            task8Array[halfArray + i] = arrayTemp;
        };
    } else {
        let middle = (task8Array.length - 1) / 2;
        for (let i = 0; i < middle; i++) {
            arrayTemp = task8Array[i];
            task8Array[i] = task8Array[middle + i + 1];
            task8Array[middle + i + 1] = arrayTemp;
        };
    };
    return resultArrayTask8;
};

task8HalfOfArr(task8Array);
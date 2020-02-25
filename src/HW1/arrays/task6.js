let array = [11, 5, 2, 3, 8, 1, 6, 7, 16];
function reverseArray(array) {
    let revArray = [];
    for(let i = array.length - 1; i >= 0; i--) {
        revArray.push(array[i]);
    }
    return revArray;

    // ИЛИ

    
    // let revArray = [];
    // array.forEach(element => {
    //     revArray.unshift(element);
    // });
    // return revArray;
}

console.log(reverseArray(array));
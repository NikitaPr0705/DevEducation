let numb = 12345;

function task6ReverseNumb(numb) {
    let numbStr = numb.toString();
    let numbStrResult = [];
    for (let i = numbStr.length - 1; i >= 0; i--) {
        numbStrResult += numbStr[i];
        numbStrResult = +numbStrResult;
    };
    return numbStrResult;
}

task6ReverseNumb(numb);
let numb = 12345;
function reverseNumb(numb) {
    let numbStr = String(numb);
    let strSplit = numbStr.split('');
    let reverseStr = strSplit.reverse();
    let joinStr = +reverseStr.join('');
    console.log(joinStr);
}

reverseNumb(numb);

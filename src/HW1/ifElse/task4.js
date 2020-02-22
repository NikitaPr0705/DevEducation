function countMax(a,b,c) {
    let sum = a + b + c;
let multiple = a * b * c;
    if(sum > multiple) {
        return sum + 3;
    }
    if(multiple > sum) {
        return multiple + 3;
    } 
}

countMax();
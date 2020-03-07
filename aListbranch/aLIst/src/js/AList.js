const List = require('../../../../list branch/list/list').List;

function AList(array) {

    List.apply(this, arguments);

    this.defaultArray = array;
    this.arr = []; // объявление копии defaultArray для работы с копией
    this.init(); // инициализация копии при помощи прототипа init
}; // функция-конструктор

AList.prototype = Object.create(List.prototype);
AList.prototype.constructor = AList;

AList.prototype.init = function() {
    let index = 0;
    while (this.defaultArray[index] !== undefined) {
        this.arr[index] = this.defaultArray[index];
        index++;
    }
    return this.arr;
}

AList.prototype.size = function() {
    let index = 0;
    while (this.arr[index] !== undefined) {
        index++;
    }
   return index;

}

AList.prototype.addStart = function(value) {
    let tempArray = [];
    tempArray[0] = value;
    for(let i = 0; i < this.size(); i++) {
        tempArray[i + 1] = this.arr[i];
    }
    this.arr = tempArray;
    return this.arr;
};


AList.prototype.addEnd = function(value) {
    this.arr[this.size()] = value;
    return this.arr;
}

AList.prototype.addPos = function(index, value) {
    let arrTemp = [];
    arrTemp[index] = value;
    for (let i = 0; i < index; i++) {
        arrTemp[i] = this.arr[i];
    }
    for (let i = index; i < this.size(); i++) {
        arrTemp[i + 1] = this.arr[i];
    }
    this.arr = arrTemp;
    return this.arr;
}

AList.prototype.delStart = function() {
    let tempArray = [];
    for(let i = 0; i < this.size(); i++) {
        tempArray[i] = this.arr[i + 1];
    };
    this.arr = tempArray;
    return this.arr;
}

AList.prototype.delEnd = function() {
    let tempArray = [];
    for(let i = 0; i < this.size() - 1; i++) {
    tempArray[i] = this.arr[i];
    }
    this.arr = tempArray;
    return this.arr;
}

AList.prototype.delPos = function(index) {
    let tempArray = [];
    tempArray[index] = index;
    for(let i = 0; i < index; i++) {
        tempArray[i] = this.arr[i];
    }
    for(let i = index; i < this.size(); i++) {
        tempArray[i] = this.arr[i + 1];
    }
    if(index > this.arr[this.size() - 1]) {
        return undefined
    }
    this.arr = tempArray;
    return this.arr;
}

AList.prototype.get = function(index) { // передать индекс и взять его значение
    if(index > this.arr[this.size() - 1]) {
        return undefined
    } else {
    return this.arr[index];
}
}

AList.prototype.set = function(index, value) { // заменить значение по индексу
    let tempArray = [];
        for(let i = 0; i < index; i++) {
            tempArray[i] = this.arr[i];
        }
        tempArray[index] = value;
        for(let i = index + 1; i < this.size(); i++) {
            tempArray[i] = this.arr[i - 1];
        }
        if(index > tempArray[this.size() - 1]) {
            return 'Index not defined'
        }
    this.arr = tempArray;
    return this.arr;
}

AList.prototype.toString = function() { // массив в строку
    let tempArray = [];
    let str = '';
    tempArray = this.arr;
    for(let i = 0; i < this.size(); i++) {
        str += tempArray[i];
    }
    return str;
}

AList.prototype.clear = function() { // вернуться к изначальному массиву
    this.arr = this.defaultArray;
    return this.arr;
}

AList.prototype.min = function() { // минимальный элемент массива, через сравнение между собой
    let tempArray = [];
    let minElem;
    tempArray = this.arr;
    minElem = tempArray[0];
    for(let i = 1; i < this.size(); i++) {
        if(tempArray[i] < minElem) {
            minElem = tempArray[i];
        }
    }
    this.arr = tempArray;
    return minElem;
}

AList.prototype.max = function() { //  максимальный элемент массива
    let tempArray = [];
    let maxElem;
    tempArray = this.arr;
    maxElem = tempArray[0];
    for(let i = 1; i < this.size(); i++) {
        if(tempArray[i] > maxElem) {
            maxElem = tempArray[i];
        }
    }
    this.arr = tempArray;
    return maxElem;
}

AList.prototype.sort = function() { // сортировка по значению от меньшего к большему

    let arrLength = this.size();
    for (let i = 0; i < arrLength-1; i++) {
       let minElemOfArr = i;
       for (let nextIndexOfArr = i + 1; nextIndexOfArr < arrLength; nextIndexOfArr++) {
            if (this.arr[nextIndexOfArr] < this.arr[minElemOfArr])
            minElemOfArr = nextIndexOfArr;
        }
       let tempMinEl = this.arr[minElemOfArr];
       this.arr[minElemOfArr] = this.arr[i];
       this.arr[i] = tempMinEl;
     }
    return this.arr;
}

AList.prototype.minIndex = function() { // вывести индекс минимального значения
    let tempArray = [];
    tempArray = this.arr;
    let elemMin = tempArray[0];
    let minElemIndex = 0;
    for(let i = 1; i < this.size(); i++) {
        if(tempArray[i] < elemMin) {
            minElemIndex = i;
            elemMin = tempArray[i];
        }
    }
    this.arr = tempArray;
    return minElemIndex;
}

AList.prototype.maxIndex = function() { // вывести индекс максимального значения
    let tempArray = [];
    tempArray = this.arr;
    let elemMax = tempArray[0];
    let maxElemIndex = 0;
    for(let i = 1; i < this.size(); i++) {
        if(tempArray[i] > elemMax) {
            maxElemIndex = i;
            elemMax = tempArray[i];
        }
    }
    this.arr = tempArray;
    return maxElemIndex;
}

AList.prototype.reverse = function() {
    let tempArray = [];
    for(let i = 0; i < this.size(); i++) {
        tempArray[i] = this.arr[this.size() - 1 - i];
    }
    this.arr = tempArray;
    return this.arr;
}

AList.prototype.halfReverse = function() {
    let tempArray = [];
    let halfOfArray = this.size() / 2;
    if(this.size() % 2 === 0) {
        for(let i = 0; i < halfOfArray; i++) {
            tempArray[i] = this.arr[halfOfArray - 1 - i];
        };
        for(let i = halfOfArray; i < this.size(); i++) {
            tempArray[i] = this.arr[this.size() - i + halfOfArray - 1];
        }
    }
    else {
        halfOfArray = (this.size() - 1) / 2;
        for(let i = 0; i < halfOfArray; i++) {
            tempArray[i] = this.arr[halfOfArray - 1 - i];
        };
        for(let i = halfOfArray + 1; i < this.size(); i++) {
            tempArray[i] = this.arr[this.size() + halfOfArray - i];
        }
        tempArray[halfOfArray] = this.arr[halfOfArray];
    }
    this.arr = tempArray;
    return this.arr;
}

module.exports.AList = AList;

let arrayList = new AList([1, 2, 3, 4, 5, 6, 7]);
// console.log(arrayList.init());
// console.log(arrayList.size());
// console.log(arrayList.addStart(40));
// console.log(arrayList.addEnd(23));
// console.log(arrayList.addPos(5,43));
// console.log(arrayList.delStart());
// console.log(arrayList.delEnd());
// console.log(arrayList.delPos(1));
// console.log(arrayList.get(4));
// console.log(arrayList.set(4,56));
// console.log(arrayList.toString());
// console.log(arrayList.clear());
// console.log(arrayList.min());
// console.log(arrayList.max());
// console.log(arrayList.sort());
// console.log(arrayList.minIndex());
// console.log(arrayList.maxIndex());
// console.log(arrayList.reverse());
// console.log(arrayList.halfReverse());






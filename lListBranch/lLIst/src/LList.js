'use strict'

const List = require('../../../list/list.js').List;
const Node = require('../../node/node.js').Node;

function LList (element) {
    List.apply(this, arguments);// обращение к функции-конструктору родителя и достает все свойства и аргументы

    this.length = 0; // количество элементов списка // можно назвать length
    this.root = null; // входная точка, которая ссылается на первую ноду
    this.defaultValue = element;
    this.init();
};

module.exports = LList;

LList.prototype = Object.create(List.prototype);
LList.prototype.constructor = LList;

LList.prototype.addStart = function(value) {
    const newNode = new Node(value);

    newNode.next = this.root;
    this.root = newNode;
    this.length++;
    return this.length;
};

LList.prototype.init = function() {
    let i = 0;
    while(this.defaultValue[i] !== undefined) {
        this.addStart(this.defaultValue[i]);
        i++;
    }
};

LList.prototype.size = function() {
    debugger
    let counter = 0;
    let tempArray = this.root;
    while(tempArray.next) {
        counter++;
    }
    return counter;
    // return this.length;
}

LList.prototype.addEnd = function(value) {
    const newNode = new Node(value);
    let tempNode = this.root;
    while(tempNode.next !== null) {
        tempNode = tempNode.next;
    }
    tempNode.next = newNode;
    this.length++;
    return this.length;

}

LList.prototype.addPos = function(index, value) {
    const newNode = new Node(value);
}

LList.prototype.delStart = function() {
    this.length--;
}

LList.prototype.delEnd = function() {
}

LList.prototype.delPos = function(index) {

}

LList.prototype.get = function(index) {

}

LList.prototype.set = function(index, value) {

}

LList.prototype.toString = function() {

}

LList.prototype.toArray = function() {

}

LList.prototype.clear = function() {

}

LList.prototype.min = function() {

}

LList.prototype.max = function() {

}

LList.prototype.sort = function() {

}

LList.prototype.minIndex = function() {

}

LList.prototype.maxIndex = function() {

}

LList.prototype.reverse = function() {

}

LList.prototype.halfReverse = function() {

}



const Llist = new LList([11, 2, 43, 14, 25]);

console.log(Llist.size()); 
'use strict'

const List = require('../list/list.js');
const Node = require('./node.js');

function LList (element) {
    List.apply(this);

    this.length = 0; // количество элементов списка // можно назвать length
    this.root = null; // входная точка, которая ссылается на первую ноду
    this.defaultValue = element;
    this.init(element);
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
    return this.length;
}

LList.prototype.addEnd = function(value) {
    const newNode = new Node(value);
    newNode.next = null;
    this.root = newNode;
    this.length++;

}

LList.prototype.addPos = function(index, value) {
    const newNode = new Node(value);
}

LList.prototype.delStart = function() {
    this.length--;
}

LList.prototype.delEnd = function() {
    if(!this.root) {
        return null
    } else {
        let value = this.root.value;
        this.root = this.root.next;
    }
    if(this.head) {

    }
    this.length--;
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


/////


// function List(params) {

// }


// module.exports = function List(arr) {

// }

// module.exports = {
//     List : List
// } // экспортируется объект, которому присвоен кдлюч List


const Llist = new LList();

console.log(Llist.init()); 
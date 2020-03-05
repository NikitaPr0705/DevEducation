'use strict'

function List(array) {
}; // функция-конструктор


List.prototype.init = function() {
}

List.prototype.size = function() {
}

List.prototype.addStart = function(value) {
};

List.prototype.addEnd = function(value) {
}

List.prototype.addPos = function(index, value) {
}

List.prototype.delStart = function() {
}

List.prototype.delEnd = function() {
}

List.prototype.delPos = function(index) {
}

List.prototype.get = function(index) { // передать индекс и взять его значение
}

List.prototype.set = function(index, value) { // заменить значение по индексу
}

List.prototype.toString = function() { // массив в строку
}

List.prototype.clear = function() { // вернуться к изначальному массиву
}

List.prototype.min = function() { // минимальный элемент массива, через сравнение между собой
}

List.prototype.max = function() { //  максимальный элемент массива
}

List.prototype.sort = function() { // сортировка по значению от меньшего к большему
}

List.prototype.minIndex = function() { // вывести индекс минимального значения
}

List.prototype.maxIndex = function() { // вывести индекс максимального значения
}

List.prototype.reverse = function() {
}

List.prototype.halfReverse = function() {
}

module.exports = List;

const asd = new AList([1, 2, 3, 4, 5, 6, 7])
// const dfg = new AList([78, 4, 555555, 77, 54553, 3, 55, 342, 4556, 334343434])



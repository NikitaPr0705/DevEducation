const { AList } = require('../AList');

let arrayList = new AList([1, 2, 3, 4, 5, 6, 7]);
// let testArray = new AList([35, 89, 54, 39, 12]);

describe('Test: init', function () {
    it('init worked', function () {
        assert.deepEqual(arrayList.init(), [1, 2, 3, 4, 5, 6, 7])
    })
});
describe('Test: size', function () {
    it('size worked', function () {
        assert.deepEqual(arrayList.size(), 7)
    })
});
describe('Test: addStart', function () {
    it('Value: 40', function () {
        assert.deepEqual(arrayList.addStart(40), [40, 1, 2, 3, 4, 5, 6, 7])
    })
});
describe('Test: addEnd', function () {
    it('Value: 23', function () {
        assert.deepEqual(arrayList.addEnd(23), [40, 1, 2, 3, 4, 5, 6, 7, 23])
    })
});
describe('Test: addPos', function () {
    it('Index: 5, Value: 43', function () {
        assert.deepEqual(arrayList.addPos(5,43), [40, 1, 2, 3, 4, 43, 5, 6, 7, 23])
    })
});
describe('Test: delStart', function () {
    it('delStart worked', function () {
        assert.deepEqual(arrayList.delStart(), [1, 2, 3, 4, 43, 5, 6, 7, 23, undefined])
    })
});
describe('Test: delEnd', function () {
    it('delEnd worked', function () {
        assert.deepEqual(arrayList.delEnd(), [1, 2, 3, 4, 43, 5, 6, 7])
    })
});
describe('Test: delPos', function () {
    it('delPos worked', function () {
        assert.deepEqual(arrayList.delPos(1), [1, 3, 4, 43, 5, 6, 7, undefined])
    })
    it('delPos: incorrect index in delPos', function () {
        assert.deepEqual(arrayList.delPos(10), undefined)
    })
});
describe('Test: get', function () {
    it('correct index input in get', function () {
        assert.deepEqual(arrayList.get(4), 5)
    })
    it('incorrect index input in get', function () {
        assert.deepEqual(arrayList.get(19), undefined)
    })
});
describe('Test: set', function () {
    it('correct index input in set', function () {
        assert.deepEqual(arrayList.set(4,56), [1, 3, 4, 43, 56, 5, 6])
    })
    it('incorrect index input in set', function () {
        assert.deepEqual(arrayList.set(10, 6), 'Index not defined')
    })
});
describe('Test: toString', function () {
    it('toString worked', function () {
        assert.deepEqual(arrayList.toString(), '134435656')
    })
});
describe('Test: clear', function () {
    it('toString worked', function () {
        assert.deepEqual(arrayList.clear(), [1, 2, 3, 4, 5, 6, 7])
    })
});
describe('Test: min', function () {
    it('min worked', function () {
        assert.deepEqual(arrayList.min(), 1)
    })
});
describe('Test: max', function () {
    it('max worked', function () {
        assert.deepEqual(arrayList.max(), 7)
    })
});
describe('Test: sort', function () {
    it('sort worked', function () {
        assert.deepEqual(arrayList.sort(), [1, 2, 3, 4, 5, 6, 7])
    })
});
describe('Test: minIndex', function () {
    it('minIndex worked', function () {
        assert.deepEqual(arrayList.minIndex(), 0)
    })
});
describe('Test: maxIndex', function () {
    it('maxIndex worked', function () {
        assert.deepEqual(arrayList.maxIndex(), 6)
    })
});
describe('Test: reverse', function () {
    it('reverse worked', function () {
        assert.deepEqual(arrayList.reverse(), [7, 6, 5, 4, 3, 2, 1])
    })
});
describe('Test: halfReverse', function () {
    it('halfReverse worked n%2 != 0', function () {
        arrayList.reverse();
        assert.deepEqual(arrayList.halfReverse(), [3, 2, 1, 4, 7, 6, 5])
    })
    it('halfReverse worked n%2 == 0', function () {
        // arrayList.reset();
        arrayList.clear();
        arrayList.delEnd(7)
        assert.deepEqual(arrayList.halfReverse(), [3, 2, 1, 6, 5, 4])
    })
});
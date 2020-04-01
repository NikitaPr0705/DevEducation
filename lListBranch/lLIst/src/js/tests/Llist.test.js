const { LList } = require('../LList');

let testArray = new LList([35, 89, 54, 39, 12]);

describe('addStartTest', function () {
    it('input 24', function () {
        assert.deepEqual(testArray.addStart(78), [78, 35, 89, 54, 39, 12])
    })
});
describe('addEndTest', function () {
    it('input 55', function () {
        assert.deepEqual(testArray.addEnd(55), [78, 35, 89, 54, 39, 12, 55])
    })
});
describe('delFirstTest', function () {
    it('delFirst worked', function () {
        assert.deepEqual(testArray.delFirst(), 78)
    })
});
describe('delEndTest', function () {
    it('delEnd worked', function () {
        assert.deepEqual(testArray.delEnd(), 55)
    })
});
describe('delPosTest', function () {
    it('delPos worked', function () {
        assert.deepEqual(testArray.delPos(3), 39)
    })
});
describe('getTest', function () {
    it('correct index input in get', function () {
        assert.deepEqual(testArray.get(2), 54)
    })
    it('incorrect index input in get', function () {
        assert.deepEqual(testArray.delPos(5), undefined)
    })
});
describe('setTest', function () {
    it('correct index input in get', function () {
        assert.deepEqual(testArray.set(2, 9), [35, 89, 9])
    })
    it('incorrect index input in get', function () {
        assert.deepEqual(testArray.set(5, 6), 'Index not defined')
    })
});
describe('toStringTest', function () {
    it('toString worked', function () {
        assert.deepEqual(testArray.toString(), '35899')
    })
});
describe('maxTest', function () {
    it('max worked', function () {
        assert.deepEqual(testArray.max(), 89)
    })
});
describe('minTest', function () {
    it('min worked', function () {
        assert.deepEqual(testArray.min(), 9)
    })
});
describe('sizeTest', function () {
    it('size worked', function () {
        assert.deepEqual(testArray.size(), 3)
    })
});
describe('resetTest', function () {
    it('size worked', function () {
        assert.deepEqual(testArray.reset(), 'Reset')
    })
});
describe('sortTest', function () {
    it('sort worked', function () {
        assert.deepEqual(testArray.sort(), [12, 35, 39, 54, 89])
    })
});
describe('maxIndexTest', function () {
    it('maxIndex worked', function () {
        assert.deepEqual(testArray.maxIndex(), 4)
    })
});
describe('minIndexTest', function () {
    it('minIndex worked', function () {
        assert.deepEqual(testArray.minIndex(), 0)
    })
});
describe('reverseTest', function () {
    it('reverse worked', function () {
        assert.deepEqual(testArray.reverse(), [89, 54, 39, 35, 12])
    })
});
describe('halfReverseTest', function () {
    it('halfReverse worked n%2 != 0', function () {
        assert.deepEqual(testArray.halfReverse(), [54, 89, 39, 12, 35])
    })
    it('halfReverse worked n%2 == 0', function () {
        testArray.reset();
        testArray.addStart(37);
        assert.deepEqual(testArray.halfReverse(), [54, 39, 12, 37, 35, 89])
    })
});
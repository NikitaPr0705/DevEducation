const calcSum = require('../logic.js').calcSum;
const calcDivide = require('../logic.js').calcDivide;
const calcMultiple = require('../logic.js').calcMultiple;
const calcSubstr = require('../logic.js').calcSubstr;

describe('Addition function check', () => {
    it('Enter 10 and 5, the result is 15', () => {
        assert.equal(calcSum(10, 5), 15);
    })

    it('Enter -10 and 5, the result is 5', () => {
        assert.equal(calcSum(-10, 5), -5);
    })
})

describe('Substraction function check', () => {
    it('Enter 45 and 5, the result is 40', () => {
        assert.equal(calcSubstr(45, 5), 40);
    })

    it('Enter 45 and 60, the result is -15', () => {
        assert.equal(calcSubstr(45, 60), -15);
    })
})

describe('Division function check', () => {
    it('Enter 10 and 5, the result is 2', () => {
        assert.equal(calcDivide(10, 5), 2);
    })

    it('Enter -10 and 5, the result is -2', () => {
        assert.equal(calcDivide(-10, 5), -2);
    })
})

describe('Multiplication function check', () => {
    it('Enter 10 and 5, the result is 50', () => {
        assert.equal(calcMultiple(10, 5), 50);
    })

    it('Enter -10 and 5, the result is -50', () => {
        assert.equal(calcMultiple(-10, 5), -50);
    })
})
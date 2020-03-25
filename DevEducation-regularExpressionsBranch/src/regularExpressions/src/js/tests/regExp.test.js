const {} = require('../regExp');

// let testArray = new AList([35, 89, 54, 39, 12]);

describe('Task 1', function () {
    it('Вернуть а, любой символ, b', function () {
        assert.deepEqual(task1('ahb acb aeb aeeb adcb axeb'), ['ahb', 'acb', 'aeb'])
    })
});

describe('Task 2', function () {
    it('Вернуть а, 2 любых символа, b', function () {
        assert.deepEqual(task2('aba aca aea abba adca abea'), ['abba', 'adca', 'abea'])
    })
});

describe('Task 3', function () {
    it('Вернуть строки abba и abea, не захватив adca', function () {
        assert.deepEqual(task3('aba aca aea abba adca abea'), ['abba', 'abea'])
    })
});

describe('Task 4', function () {
    it('Вернуть букву a, букву b любое количество раз, букву a', function () {
        assert.deepEqual(task4('aa aba abba abbba abca abea'), ['aba', 'abba', 'abbba'])
    });
});

describe('Task 5', function () {
    it('Вернуть букву a, букву b любое количество раз (в том числе ни одного раза), букву a', function () {
        assert.deepEqual(task5('aa aba abba abbba abca abea'), ['aa', 'aba', 'abba', 'abbba'])
    });
});

describe('Task 6', function () {
    it('Вернуть строки aa, aba по шаблону: буква a, буква b один раз или ниодного, буква a', function () {
        assert.deepEqual(task6('aa aba abba abbba abca abea'), ['aa', 'aba'])
    });
});

describe('Task 7', function () {
    it('Вернуть строки aa, aba, abba, abbba, не захватив abca abea', function () {
        assert.deepEqual(task7('aa aba abba abbba abca abea'), ['aa', 'aba', 'abba', 'abbba'])
    });
});

describe('Task 8', function () {
    it('Вернуть строки по шаблону: строка ab повторяется 1 или более раз', function () {
        assert.deepEqual(task8('ab abab abab abababab abea'), ['ab', 'abab', 'abab', 'abababab', 'ab'])
    });
});

describe('Task 9', function () {
    it('Вернуть строку a.a, не захватив остальные', function () {
        assert.deepEqual(task9('a.a aba aea'), ['a.a'])
    });
});

describe('Task 10', function () {
    it('Вернуть строку 2+3, не захватив остальные', function () {
        assert.deepEqual(task10('2+3 223 2223'), ['2+3'])
    });
});

describe('Task 11', function () {
    it('Вернуть строки 2+3, 2++3, 2+++3, не захватив остальные (+ может быть любое количество)', function () {
        assert.deepEqual(task11('23 2+3 2++3 2+++3 345 567'), ['2+3', '2++3', '2+++3'])
    });
});

describe('Task 12', function () {
    it('Вернуть строки 23, 2+3, 2++3, 2+++3, не захватив остальные', function () {
        assert.deepEqual(task12('23 2+3 2++3 2+++3 445 677'), ['23', '2+3', '2++3', '2+++3'])
    });
});

describe('Task 13', function () {
    it('Вернуть строки *q+, *qq+, *qqq+, не захватив остальные', function () {
        assert.deepEqual(task13('*+ *q+ *qq+ *qqq+ *qqq qqq+'), ['*q+', '*qq+', '*qqq+'])
    });
});

describe('Task 14', function () {
    it('Вернуть все строки по краям которых стоят буквы a, и заменит каждую из них на !. Между буквами a может быть любой символ (кроме a)', function () {
        assert.deepEqual(task14('aba accca azzza wwwwa'), '!!!wwwwa')
    });
});

describe('Task 15', function () {
    it('Вернуть строки abba, abbba, abbbba и только их', function () {
        assert.deepEqual(task15('aa aba abba abbba abbbba abbbbba'), ['abba', 'abbba', 'abbbba'])
    });
});

describe('Task 16', function () {
    it('Вернуть строки вида aba, в которых b встречается менее 3-х раз (включительно)', function () {
        assert.deepEqual(task16('aa aba abba abbba abbbba abbbbba'), ['aba', 'abba', 'abbba'])
    });
});

describe('Task 17', function () {
    it('Вернуть строки вида aba, в которых b встречается более 4-х раз (включительно)', function () {
        assert.deepEqual(task17('aa aba abba abbba abbbba abbbbba'), ['abbbba', 'abbbbba'])
    });
});

describe('Task 18', function () {
    it('Вернуть строки, в которых по краям стоят буквы a, а между ними одна цифра', function () {
        assert.deepEqual(task18('a1a a2a a3a a4a a5a aba aca'), ['a1a', 'a2a', 'a3a', 'a4a', 'a5a'])
    });
});

describe('Task 19', function () {
    it('Вернуть строки, в которых по краям стоят буквы a, а между ними любое количество цифр', function () {
        assert.deepEqual(task19('a1a a22a a333a a4444a a55555a aba aca'), ['a1a', 'a22a', 'a333a', 'a4444a', 'a55555a'])
    });
});

describe('Task 20', function () {
    it('Вернуть строки, в которых по краям стоят буквы a, а между ними любое количество цифр (в том числе и ноль цифр, то есть строка aa)', function () {
        assert.deepEqual(task20('aa a1a a22a a333a a4444a a55555a aba aca'), ['aa', 'a1a', 'a22a', 'a333a', 'a4444a', 'a55555a'])
    });
});

describe('Task 21', function () {
    it('Вернуть строки следующего вида: по краям стоят буквы a и b, а между ними - не число.', function () {
        assert.deepEqual(task21('avb a1b a2b a3b a4b a5b abb acb'), ['avb', 'abb', 'acb'])
    });
});

describe('Task 22', function () {
    it('Вернуть строки следующего вида: по краям стоят буквы a и b, а между ними - не буква и не цифра.', function () {
        assert.deepEqual(task22('ave a#b a2b a$b a4b a5b a-b acb'), ['a#b', 'a$b', 'a-b'])
    });
});

describe('Task 23', function () {
    it('Заменить все пробелы на !', function () {
        assert.deepEqual(task23('ave a#a a2a a$a a4a a5a a-a aca'), 'ave!a#a!a2a!a$a!a4a!a5a!a-a!aca')
    });
});

describe('Task 24', function () {
    it('Найти строки aba, aea, axa, не затронув остальных', function () {
        assert.deepEqual(task24('aba aea aca aza axa'), ['aba', 'aea', 'axa'])
    });
});

describe('Task 25', function () {
    it('Найти строки aba, a.a, a+a, a*a, не затронув остальных', function () {
        assert.deepEqual(task25('aba aea aca aza axa a.a a+a a*a'), ['aba', 'a.a', 'a+a', 'a*a'])
    });
});

describe('Task 26', function () {
    it('Вернуть строки следующего вида: по краям стоят буквы a, а между ними - цифра от 3-х до 7-ми', function () {
        assert.deepEqual(task26('a2a a3a a4a a5a a6a a7a a8a'), ['a3a', 'a4a', 'a5a', 'a6a', 'a7a'])
    });
});

describe('Task 27', function () {
    it('Вернуть строки следующего вида: по краям стоят буквы a, а между ними - буква от a до g', function () {
        assert.deepEqual(task27('aoa aaa aba aca ada aea afa aga aha aia'), ['aaa', 'aba', 'aca', 'ada', 'aea', 'afa', 'aga'])
    });
});

describe('Task 28', function () {
    it('Вернуть строки следующего вида: по краям стоят буквы a, а между ними - буква от a до f и от j до z', function () {
        assert.deepEqual(task28('aaa aba aca ada aea afa aga aha aia aja aka ala ama ana aoa apa aqa ara asa ata aua ava awa axa aya aza a34 a5aa a4a'), ['aaa', 'aba', 'aca', 'ada', 'aea', 'afa', 'aja', 'aka', 'ala', 'ama', 'ana', 'aoa', 'apa', 'aqa', 'ara', 'asa', 'ata', 'aua', 'ava', 'awa', 'axa', 'aya', 'aza'])
    });
});

describe('Task 29', function () {
    it('Вернуть строки следующего вида: по краям стоят буквы a, а между ними - буква от a до f и от A до Z', function () {
        assert.deepEqual(task29('aaa aba aca ada aea afa aga aha aia aja aka ala a34 a5aa a4a ..... aAa aBa aCa aDa aEa aFa aGa aHa aIa aJa aKa aLa aMa aNa aOa aPa aQa aRa aSa aTa aUa aVa aWa aXa aYa aZa'), ['aaa', 'aba', 'aca', 'ada', 'aea', 'afa', 'aAa', 'aBa', 'aCa', 'aDa', 'aEa', 'aFa', 'aGa', 'aHa', 'aIa', 'aJa', 'aKa', 'aLa', 'aMa', 'aNa', 'aOa', 'aPa', 'aQa', 'aRa', 'aSa', 'aTa', 'aUa', 'aVa', 'aWa', 'aXa', 'aYa', 'aZa'])
    });
});

describe('Task 30', function () {
    it('Найти строки следующего вида: по краям стоят буквы a, а между ними - не e и не x', function () {
        assert.deepEqual(task30('aba aea aca aza axa a-a a#a'), ['aba', 'aca', 'aza', 'a-a', 'a#a'])
    });
});

// describe('Task 31', function () {
//     it('Найти строки следующего вида: по краям стоят буквы w, а между ними - буква кириллицы', function () {
//         assert.deepEqual(task31('wйw wяw wёw wqw'), ['wйw', 'wяw', 'wёw'])
//     });
// });

// describe('Task 32', function () {
//     it('Найти строки следующего вида: по краям стоят буквы a, а между ними - маленькие латинские буквы, не затронув остальных', function () {
//         assert.deepEqual(task32('aAXa aeffa aGha aza ax23a a3sSa'), ['aeffa', 'aza'])
//     });
// });

// describe('Task 30', function () {
//     it('Найти строки следующего вида: по краям стоят буквы a, а между ними - не e и не x', function () {
//         assert.deepEqual(task27('aba aea aca aza axa a-a a#a'), ['aba', 'aсa', 'aza', 'aca', 'a-a', 'a#a'])
//     });
// });
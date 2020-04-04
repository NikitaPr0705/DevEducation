const {} = require('../regExp');


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

describe('Task 31', function () {
    it('Найти строки следующего вида: по краям стоят буквы w, а между ними - буква кириллицы', function () {
        assert.deepEqual(task31('wйw wяw wёw wqw'), ['wйw', 'wяw', 'wёw'])
    });
});

describe('Task 32', function () {
    it('Найти строки следующего вида: по краям стоят буквы a, а между ними - маленькие латинские буквы, не затронув остальных', function () {
        assert.deepEqual(task32('aAXa aeffa aGha aza ax23a a3sSa'), ['aeffa', 'aza'])
    });
});

describe('Task 33', function () {
    it('Найти строки следующего вида: по краям стоят буквы a, а между ними - маленькие и большие латинские буквы, не затронув остальных.', function () {
        assert.deepEqual(task33('aAXa aeffa aGha aza ax23a a3sSa'), ['aAXa', 'aeffa', 'aGha', 'aza'])
    });
});

describe('Task 34', function () {
    it('Найти строки следующего вида: по краям стоят буквы a, а между ними - маленькие латинские буквы и цифры, не затронув остальных..', function () {
        assert.deepEqual(task34('aAXa aeffa aGha aza ax23a a3sSa'), [ 'aeffa', 'aza', 'ax23a'])
    });
});

describe('Task 35', function () {
    it('Найти все слова по шаблону: любая кириллическая буква любое количество раз.', function () {
        assert.deepEqual(task35('ааа ббб ёёё ззз ййй ААА БББ ЁЁЁ ЗЗЗ ЙЙЙ'), [ 'ааа', 'ббб', 'ёёё', 'ззз', 'ййй', 'ААА', 'БББ', 'ЁЁЁ', 'ЗЗЗ', 'ЙЙЙ'])
    });
});

describe('Task 36', function () {
    it('Заменить первое aaa на !', function () {
        assert.equal(task36('aaa aaa aaa'), [ '! aaa aaa'])
    });
});

describe('Task 37', function () {
    it('Заменить последнее aaa на !', function () {
        assert.equal(task37('aaa aaa aaa'), [ 'aaa aaa !'])
    });
});

describe('Task 38', function () {
    it('Найти строки следующего вида: по краям стоят буквы a, а между ними - или буква e любое количество раз или по краям стоят буквы a, а между ними - буква x любое количество раз', function () {
        assert.deepEqual(task38('aeeea aeea aea axa axxa axxxa'), [ 'aeeea', 'aeea', 'aea', 'axa', 'axxa', 'axxxa'])
    });
});

describe('Task 39', function () {
    it('Найти строки следующего вида: по краям стоят буквы a, а между ними - или буква e два раза или буква x любое количество раз', function () {
        assert.deepEqual(task39('aeeea aeea aea axa axxa axxxa'), ['aeea', 'axa', 'axxa', 'axxxa'])
    });
});


describe('Task 40', function () {
    it('Заменить строку a\\a на !', function () {
        assert.equal(task40('a\\a abc'), '! abc')
    });
});

describe('Task 41', function () {
    it('Заменить строку a\\a на !', function () {
        assert.equal(task41('a\\a a\\\\a a\\\\\\a'), 'a\\a a\\\\a !')
    });
});

describe('Task 42', function () {
    it('Заменить содержимое всех конструкций /...\ и заменит их на !', function () {
        assert.equal(task42('bbb \/aaa\\ bbb \/ccc\\'), 'bbb ! bbb !')
    });
});

describe('Task 43', function () {
    it('Заменить строки по шаблону: любое количество букв и цифр, символ @, любое количество букв и цифр и поменяет местами то, что стоит до @ на то, что стоит после нее. Например, aaa@bbb должно превратиться в bbb@aaa', function () {
        assert.equal(task43('aaa@bbb eee7@kkk'), 'bbb@aaa kkk@eee7')
    });
});

describe('Task 44', function () {
    it('Найти все цифры и удвоит их количество таким образом: a11b22c33 (то есть рядом с каждой цифрой напишет такую же).', function () {
        assert.equal(task44('a1b2c3'), ['a11b22c33'])
    });
});

describe('Task 45', function () {
    it('Определить, что переданная строка является емэйлом', function () {
        assert.equal(task45('mymail@mail.ru, my.mail@mail.ru, my-mail@mail.ru, my_mail@mail.ru, mail@mail.com, mail@mail.by, mail@yandex.ru'), true)
    });
});

describe('Task 46', function () {
    it('Найти все емэйлы в виде массива', function () {
        assert.deepEqual(task46('mymail@mail.ru, my.mail@mail.ru, my-mail@mail.ru, my_mail@mail.ru, mail@mail.com, mail@mail.by, mail@yandex.ru'), ['mymail@mail.ru', 'my.mail@mail.ru', 'my-mail@mail.ru', 'my_mail@mail.ru', 'mail@mail.com', 'mail@mail.by', 'mail@yandex.ru'])
    });
});

describe('Task 47', function () {
    it('Определить, что переданная строка является доменом.', function () {
        assert.deepEqual(task47('site.ru, site.com, my-site.com'), true)
    });
});

describe('Task 48', function () {
    it('Определить, что переданная строка является доменом.', function () {
        assert.deepEqual(task48('http://site.ru, http://site.com'), true)
    });
});

describe('Task 49', function () {
    it('Определить, что переданная строка является доменом вида http://site.ru. Протокол может быть как http, так и https', function () {
        assert.deepEqual(task49('http://site.ru, https://site.com'), true)
    });
});

describe('Task 50', function () {
    it('Определить, что переданная строка начинается с http или с https.', function () {
        assert.deepEqual(task50('http://site.ru, https://site.com'), true)
    });
});

describe('Task 51', function () {
    it('Определить, что переданная строка заканчивается расширением txt, html или php.', function () {
        assert.deepEqual(task51('site.txt, site.html, test.php'), true)
    });
});

describe('Task 52', function () {
    it('Определить, что переданная строка заканчивается расширением jpg или jpeg.', function () {
        assert.deepEqual(task52('site.jpg, test.jpeg'), true)
    });
});

describe('Task 53', function () {
    it('Узнайть является ли строка числом, длиной до 12 цифр.', function () {
        assert.deepEqual(task53('123456789012'), true)
    });
});

describe('Task 54', function () {
    it('Найдите сумму всех чисел из данной строки.', function () {
        assert.equal(task54('2343 dfdf42 02323df'), ['28'])
    });
});

describe('Task 55', function () {
    it('замените в строке домены вида http://site.ru, http://site.com на <a href="http://site.ru">site.ru</a>', function () {
        assert.equal(task55('http://site.ru, http://site.com'), '<a href="http://site.ru">site.ru</a>, <a href="http://site.com">site.com</a>')
    });
});

describe('Task 56', function () {
    it('С помощью replace замените все повторяющиеся пробелы на один', function () {
        assert.equal(task56('site.ru  site.com   index style     index        style index style'), ['site.ru site.com index style index style index style'])
    });
});

describe('Task 57', function () {
    it('Найдите и удалите все комментарии CSS', function () {
        assert.equal(task57('/* .container { width: 100%; } */'), [' .container { width: 100%; } '])
    });
});

describe('Task 58', function () {
    it('Найдите и удалите все комментарии HTML', function () {
        assert.equal(task58('<!-- <div class="row"> -->'), '<div class="row">')
    });
});

describe('Task 59', function () {
    it('С помощью позитивного и негативного просмотра найдите все строки по шаблону 3 буквы a, затем буква b и поменяйте 3 буквы a на знак !.', function () {
        assert.equal(task59('aaab'), ['!b'])
    });
});

describe('Task 60', function () {
    it('С помощью позитивного и негативного просмотра найдите все строки по шаблону 3 буквы a, затем любая буква, но не b и поменяйте 3 буквы a на знак !', function () {
        assert.equal(task60('aaaw aaab'), ['!w aaab'])
    });
});

describe('Task 61', function () {
    it('Преобразуйте строку так, чтобы вместо этих чисел стояли их квадраты', function () {
        assert.equal(task61('2345'), '491625');
    });
});


describe('Task 62', function () {
    it('Найдите числа, стоящие в кавычках и увеличьте их в два раза', function () {
        assert.equal(task62("2aaa'3'bbb'4'"), "2aaa'6'bbb'8'")
    });
});

describe('Task 63', function () {
    it('Есть вставки {{текст}}. Найдите все такие вставки и поменяйте в них порядок букв на обратный', function () {
        assert.equal(task63('{{текст}}'), '{{тскет}}')
    });
});

describe('Task 64', function () {
    it('Вывести результат суммы', function () {
        assert.equal(task64('23 + 35 ='), '23 + 35 =58')
    });
});

describe('Task 65', function () {
    it('Определите, что год находится в интервале от 1900 до 2100 с помощью одного только регулярного выражения', function () {
        assert.equal(task65('1600'), false)
    });
    it('Определите, что год находится в интервале от 1900 до 2100 с помощью одного только регулярного выражения', function () {
        assert.equal(task65('2200'), false)
    });
    it('Определите, что год находится в интервале от 1900 до 2100 с помощью одного только регулярного выражения', function () {
        assert.equal(task65('1940'), true)
    });
});

describe('Task 66', function () {
    it('Oпределите, что переданная строка является корректным временем', function () {
        assert.deepEqual(task66('12:59 23:41 00:12 00:00 09:15 24.00 25.00 12.60 12.93 41.93'), ['12:59', '23:41', '00:12', '00:00', '09:15'])
    });
});

describe('Task 67', function () {
    it('Определите, что переданная строка является корректным временем вида 9.59 am, 12.30 pm', function () {
        assert.equal(task67('9.59 am, 12.30 pm'), true)
    });
});

describe('Task 68', function () {
    it('Удалите одной регуляркой все слова из предложения, содержащие две одинаковые следующие друг за другом буквы', function () {
        assert.equal(task68('dd bbnb aaaa aaar hghf nmcn adff'), 'hghf nmcn')
    });
});

describe('Task 69', function () {
    it('Удалите одной регуляркой все повторяющиеся слова из строки', function () {
        assert.equal(task69('dsf xxx xxx sd'), 'dsf xxx sd')
    });
});

describe('Task 70', function () {
    it('Решите предыдущую задачу с учетом того, что слово может повторяться много раз', function () {
        assert.equal(task70('dsf xxx xxx xxx xxx xxx sd'), 'dsf xxx sd')
    });
});



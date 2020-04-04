task1 = function(str) {
    let reg = /a.b/g;
    return str.match(reg);
    }

task2 = function(str) {
    let reg = /a..a/g;
    return str.match(reg);
    }

task3 = function(str) {
    let reg = /ab.a/g;
    return str.match(reg);
    }

task4 = function(str) {
    let reg = /ab+a/g;
    return str.match(reg);
    }

task5 = function(str) {
    let reg = /ab*a/g;
    return str.match(reg);
    }


task6 = function(str) {
    let reg = /ab?a/g;
    return str.match(reg);
    }

task7 = function(str) {
    let reg = /ab*a/g;
    return str.match(reg);
    }

task8 = function(str) {
    let reg = /(ab)+/g;
    return str.match(reg);
    }

task9 = function(str) {
    let reg = /a\.a/g;
    return str.match(reg);
    }

task10 = function(str) {
    let reg = /\d\+\d/g;
    return str.match(reg);
    }

task11 = function(str) {
    let reg = /\d\++\d/g;
    return str.match(reg);
    }

task12 = function(str) {
    let reg = /2\+*3/g;
    return str.match(reg);
    }

task13 = function(str) {
    let reg = /\*q+\+/g;
    return str.match(reg);
    }

task14 = function(str) {
    let reg = /\ba\w+\s/g;
    return str.replace(reg, '!');
    }

task15 = function(str) {
    let reg = /ab{2,4}a/g;
    return str.match(reg);
    }

task16 = function(str) {
    let reg = /ab{1,3}a/g;
    return str.match(reg);
    }

task17 = function(str) {
    let reg = /ab{4,}a/g;
    return str.match(reg);
    }

task18 = function(str) {
    let reg = /a\d?a/g;
    return str.match(reg);
    }

task19 = function(str) {
    let reg = /a\d+a/g;
    return str.match(reg);
    }

task20 = function(str) {
    let reg = /a\d*a/g;
    return str.match(reg);
    }

task21 = function(str) {
    let reg = /a\Db/g;
    return str.match(reg);
    }

task22 = function(str) {
    let reg = /a\Wb/g;
    return str.match(reg);
    }

task23 = function(str) {
    let reg = /\s/g;
    let strReplace = str.replace(reg, '!')
    return strReplace;
    }

task24 = function(str) {
    let reg = /a[bex]a/g;
    return str.match(reg);
    }

task25 = function(str) {
    let reg = /a(b|[^\w ])a/g;
    return str.match(reg);
    }

task26 = function(str) {
    let reg = /a[3-7]a/g;
    return str.match(reg);
    }

task27 = function(str) {
    let reg = /a[a-g]a/g;
    return str.match(reg);
    }

task28 = function(str) {
    let reg = /a[a-fj-z]a/g;
    return str.match(reg);
    }

task29 = function(str) {
    let reg = /a[a-fA-Z]a/g;
    return str.match(reg);
    }

task30 = function(str) {
    let reg = /a[^ex ]a/g;
    return str.match(reg);
    }

task31 = function(str) {
    let reg = /w\p{sc=Cyrillic}\w/gu;
    return str.match(reg);
    }

task32 = function(str) {
    let reg = /a[a-z]+a/g;
    return str.match(reg);
    }

task33 = function(str) {
    let reg = /a[a-zA-Z]+a/g;
    return str.match(reg);
    }

task34 = function(str) {
    let reg = /a[a-z0-9]+a/g;
    return str.match(reg);
    }

task35 = function(str) {
    let reg = /\p{sc=Cyrillic}+/gu;
    return str.match(reg);
    }

task36 = function(str) {
    let reg = /^(\ba+)/g;
    let strReplace = str.replace(reg, '!')
    return strReplace;
    }

task37 = function(str) {
    let reg = /(\ba+)$/g;
    let strReplace = str.replace(reg, '!')
    return strReplace;
    }

task38 = function(str) {
    let reg = /a[e|x]+a/g;
    return str.match(reg);
    }

task39 = function(str) {
    let reg = /a((ee)|(x+))a/g;
    return str.match(reg);
    }

task40 = function(str) {
    let reg = /a\\a/g;
    let strReplace = str.replace(reg, '!')
    return strReplace;
    }

task41 = function(str) {
    let reg = /a\\\\\\a/g;
    let strReplace = str.replace(reg, '!')
    return strReplace;
    }

task42 = function(str) {
    let reg = /\/\w+\\/g;
    let strReplace = str.replace(reg, '!')
    return strReplace;
    }

task43 = function(str) {
    let reg = /(\w+)@(\w+)/g;
    let strReplace = str.replace(reg, '$2@$1')
    return strReplace;
    }

task44 = function(str) {
    let reg = /(\d)|(\d)|(\d)/gi;
    let strReplace = str.replace(reg, '$1$1$2$2$3$3')
    return strReplace;
    }

task45 = function(str) {
    let reg = /(\w+.)+@(\w+.)\.(\w+)/g;
    return reg.test(str);
    }

task46 = function(str) { 
    let reg = /(\w+.)+@(\w+.)\.(\w+)/g;
    let regArray = str.match(reg);
    return regArray;
    }

task47 = function(str) {
    let reg = /(-\w+.)+\.\w+/g;
    return reg.test(str);
    }

task48 = function(str) {
    let reg = /http:\/\/(\w*)\.\w+/g;
    return reg.test(str);
    }

task49 = function(str) {
    let reg = /(\w)+:\/\/(\w*)\.\w+/g;
    return reg.test(str);
    }

task50 = function(str) {
    let reg = /[https]+:\/\/(\w+)\.(\w+)/g;
    return reg.test(str);
    }

task51 = function(str) {
    let reg = /(\w+)\.(txt|html|php)/g;
    return reg.test(str);
    }

task52 = function(str) {
    let reg = /(\w+)\.(jpg|jpeg)/g;
    return reg.test(str);
    }

task53 = function(str) {
    let reg = /\b\d{0,12}\b/g;
    return reg.test(str);
    }

task54 = function(str) {
    let reg = /(\D+)|0/g;
    let sum = 0;
    let strReplace = str.replace(reg, "");
    for (let i = 0; i < strReplace.length; i++) {
       sum += parseInt(strReplace[i]);
    }
    return sum;
    }

task55 = function(str) {
    let reg = /((http:\/\/)([\w-]+\.\w+))/g;
    let strReplace = str.replace(reg, `<a href="$1">$3</a>`)
    return strReplace;
    }

task56 = function(str) {
    let reg = /\s\s+/g;
    let strReplace = str.replace(reg, ' ');
    return strReplace;
    }

task57 = function(str) {
    let reg = /[\/\*]+/g;
    let strReplace = str.replace(reg, '');
    return strReplace;
    }

task58 = function(str) {
    let reg = /(<!-- )|( -->)/g;
    let strReplace = str.replace(reg, '');
    return strReplace;
    }

task59 = function(str) {
    let reg = /aaa(?=b)/g;
    let strReplace = str.replace(reg, '!');
    return strReplace;
    }

task60 = function(str) {
    let reg = /aaa(?=w)/g;
    let strReplace = str.replace(reg, '!');
    return strReplace;
    }

task61 = function(str) {
    let reg = /\d/g;
    let strReplace = str.replace(reg, double => {
        return double * double;
    });
    return strReplace;
    }

task62 = function(str) {
    let reg = /\d+(?=')/g;
    let strReplace = str.replace(reg, num => {
        return num * 2;
    });
    return strReplace;
    }

task63 = function(str) {
    let reg = /текст(?=\}\})/gu;
    return str.replace(reg, 'тскет')
    }

task64 = function(str) {
    let reg = /(\d+)\s\+\s(\d+)\s=/g;
    return str.replace(reg, (sum, num1, num2) => {
        const result = parseInt(num1, 10) + parseInt(num2, 10);
        return sum + result;
      });
    };

task65 = function(str) {
    let reg = /^(19\d\d|20\d\d|2100)$/g;
    return reg.test(str);
    }

task66 = function(str) {
    let reg = /([0-3][0-9]:[0-5][\d])/g;
    return str.match(reg);
    }

task67 = function(str) {
    let reg = /([0-9]*?)\.([0-5][\d])\s[ap]m\b/g;
    return reg.test(str);
    }

task68 = function(str) {
    let reg = /\W*\w*(\w)\1\w*\W*/g;
    let strReplace = str.replace(reg, '');
    return strReplace;
     }

task69 = function(str) {
    let reg = /((\w+)(\s)(x+)(\s)(\w+)(\s)(\w+))/g;
    return str.replace(reg, '$2$3$4$5$8');
    }

task70 = function(str) {
    let reg = /\b(\w+)\b(?:\s+\1\b)+/g;
    return str.replace(reg, '$1');
    }

module.exports = {};


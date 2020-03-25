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

// task31 = function(str) {
//     let reg = /ab+a/g;
//     return str.match(reg);
//     }

// task32 = function(str) {
//     let reg = /ab+a/g;
//     return str.match(reg);
//     }

// task33 = function(str) {
//     let reg = /ab+a/g;
//     return str.match(reg);
//     }

// task34 = function(str) {
//     let reg = /ab+a/g;
//     return str.match(reg);
//     }

// task35 = function(str) {
//     let reg = /ab+a/g;
//     return str.match(reg);
//     }

// task36 = function(str) {
//     let reg = /ab+a/g;
//     return str.match(reg);
//     }

// task37 = function(str) {
//     let reg = /ab+a/g;
//     return str.match(reg);
//     }

// task38 = function(str) {
//     let reg = /ab+a/g;
//     return str.match(reg);
//     }

// task39 = function(str) {
//     let reg = /ab+a/g;
//     return str.match(reg);
//     }

// task40 = function(str) {
//     let reg = /ab+a/g;
//     return str.match(reg);
//     }

// task41 = function(str) {
//     let reg = /ab+a/g;
//     return str.match(reg);
//     }

// task42 = function(str) {
//     let reg = /ab+a/g;
//     return str.match(reg);
//     }

// task43 = function(str) {
//     let reg = /ab+a/g;
//     return str.match(reg);
//     }

// task44 = function(str) {
//     let reg = /ab+a/g;
//     return str.match(reg);
//     }

// task45 = function(str) {
//     let reg = /ab+a/g;
//     return str.match(reg);
//     }

// task46 = function(str) {
//     let reg = /ab+a/g;
//     return str.match(reg);
//     }

// task47 = function(str) {
//     let reg = /ab+a/g;
//     return str.match(reg);
//     }

// task48 = function(str) {
//     let reg = /ab+a/g;
//     return str.match(reg);
//     }

// task49 = function(str) {
//     let reg = /ab+a/g;
//     return str.match(reg);
//     }

// task50 = function(str) {
//     let reg = /ab+a/g;
//     return str.match(reg);
//     }

// task51 = function(str) {
//     let reg = /ab+a/g;
//     return str.match(reg);
//     }

// task52 = function(str) {
//     let reg = /ab+a/g;
//     return str.match(reg);
//     }

// task53 = function(str) {
//     let reg = /ab+a/g;
//     return str.match(reg);
//     }

// task54 = function(str) {
//     let reg = /ab+a/g;
//     return str.match(reg);
//     }

// task55 = function(str) {
//     let reg = /ab+a/g;
//     return str.match(reg);
//     }

// task56 = function(str) {
//     let reg = /ab+a/g;
//     return str.match(reg);
//     }

// task57 = function(str) {
//     let reg = /ab+a/g;
//     return str.match(reg);
//     }

// task58 = function(str) {
//     let reg = /ab+a/g;
//     return str.match(reg);
//     }

// task59 = function(str) {
//     let reg = /ab+a/g;
//     return str.match(reg);
//     }

// task60 = function(str) {
//     let reg = /ab+a/g;
//     return str.match(reg);
//     }

// task61 = function(str) {
//     let reg = /ab+a/g;
//     return str.match(reg);
//     }

// task62 = function(str) {
//     let reg = /ab+a/g;
//     return str.match(reg);
//     }

// task63 = function(str) {
//     let reg = /ab+a/g;
//     return str.match(reg);
//     }

// task64 = function(str) {
//     let reg = /ab+a/g;
//     return str.match(reg);
//     }

// task65 = function(str) {
//     let reg = /ab+a/g;
//     return str.match(reg);
//     }

// task66 = function(str) {
//     let reg = /ab+a/g;
//     return str.match(reg);
//     }

// task67 = function(str) {
//     let reg = /ab+a/g;
//     return str.match(reg);
//     }

// task68 = function(str) {
//     let reg = /ab+a/g;
//     return str.match(reg);
//     }

// task69 = function(str) {
//     let reg = /ab+a/g;
//     return str.match(reg);
//     }

// task70 = function(str) {
//     let reg = /ab+a/g;
//     return str.match(reg);
//     }

module.exports = {};


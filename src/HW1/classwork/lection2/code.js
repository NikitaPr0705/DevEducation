// DATA TYPES


//NUMBERS
let myNumber = 12345;
console.log(myNumber);
console.log(typeof myNumber); // Number

//STRING 
let myString = 'some string';
console.log(myString);
console.log(typeof myString); // String

//BOOLEAN 
let myBool = true;
console.log(myBool)
console.log(typeof myBool); // Boolean

//NULL 
let myNull = null;
console.log(myNull)
console.log(typeof myNull); //  Null

//SYMBOL
let mySymbol = Symbol();
console.log(mySymbol)
console.log(typeof mySymbol); // Symbol

//UNDEFINED 
let myUndef = undefined;
console.log(myUndef)
console.log(typeof myUndef); // Undefined

//OBJECT 
const person = {
    name: "Nikita";
    age: 23;
    city: "Kyiv";
    isStudent: false;
}
console.log(person, typeof person);

//FUNCTION
let a = function a() {

};
console.log(`Type of function: ${typeof a}`);

//ARRAY
let a = [];
console.log(`Type of array: ${typeof a}`);


////////////////////////////////////
//Error
let a = null;
console.log(`Type of null: ${typeof a}`); // общепризнанная ошибка языка


////////////////////////////////////
//Целочисленные формы записи
console.log(10) // десятичная
console.log(0xfffcc) // шестнадцатеричная; (можно ”x” писать в верхнем регистре)
console.log(0345) // восьмеричная
console.log(012348) // десятичная, поскольку в восьмеричной нет цифр больше 7


//Вещественные формы записи:
console.log(12.45);
console.log(.89) // если первым стоит 0 его можно пропустить, но НЕ НУЖНО!
console.log(1.24e4) // экспоненциальная форма записи, может быть как с + так и с, (можно “e” писать в верхнем регистре);



//Вернет NaN
let division = 0 / 0;
console.log(division, typeof division);

let division1 = Infinity / Infinity;
console.log(division1, typeof division1);

let sqrt = Math.sqrt(-10);
console.log(sqrt, typeof sqrt) // возвращает квадратный корень числа

//
console.log(NaN === NaN); // false



//Infinity
let division = 1 / 0;
console.log(division, typeof division);

let division = -1 / 0;
console.log(division, typeof division);



// Типы NaN, Infinity --- Number
console.log(typeof NaN); // Number
console.log(typeof Infinity); // Number



// Объект-обёртка, toFixed
let number = 4000;
console.log(typeof number); // Number
let newNumber = new Number(4000);
console.log(typeof newNumber); // Object

let newNumberToFixed = newNumber.toFixed(2);
console.log(newNumberToFixed); // 4000.00



////////////////////////////////////
//Инкремент, декремент, префиксная и постфиксная формы
let count = 10;
console.log(++count); // сразу покажет 11
console.log(count); // покажет 11
console.log(count++); // сначала покажет 10
console.log(count); // но здесь покажет 11

////////////////////////////////////
//Сокращение для арифметических бинарных операторов
let variable = 100;
variable += 20
console.log(variable); // variable = variable + 20;

let anotherVariable = 25;
anotherVariable *= 4 //anotherVariable = anotherVariable * 4;
console.log(anotherVariable);



////////////////////////////////////
//Возвращают значение логического типа true или false:
console.log(5 < 10);
console.log(5 > 10);
console.log(10 >= 10);
console.log(8 <= 10);

//Сравнение на равенство или неравенство:
console.log(10 === 10);
console.log(10 !== 10);

console.log(10 === 10); // true, равенство без приведения типов
console.log(10 == 10); // false, равенство будет происходит с приведением двух сравниваемых переменных к одному типу.


////////////////////////////////////
// Ошибки округления:
let roundingErrors = 0.2 + 0.1;
console.log(roundingErrors); // 0.30000000000000000004....

////////////////////////////////////
// интерпретация строки как массива
let myString = 'new string';
console.log(myString[2]);




//ОПЕРАТОРЫ
// &&  -  и 
let number1 = 5;
let anotherNumber = number1 && 10 + number1;
console.log(anotherNumber);

// ||  -  или
let prevString = "my String";
let anotherString = prevString || "default";
console.log(anotherString);



// Варианты получения undefined:
//
let temp;
console.log(temp);
//
let obj = {};
console.log(obj.property);
//
let ar = [1, 2, 3];
console.log(ar[3]);
//
const func = () => {return;};
console.log(func());


// Сравнение null и undefined 
console.log(typeof null);
console.log(typeof undefined);
console.log(null == undefined); // true
console.log(null === undefined); // false




////////////////////////////////////
// СИМВОЛЫ

// Создание символа
let symbol = Symbol("name");
console.log(symbol);

// Cимвол с необязательным параметром
let anotherSymbol = Symbol("name");
console.log(anotherSymbol);

// Cравнение символа и символа с параметром
console.log(symbol === anotherSymbol); // False

// Создание символа с помощью метода for
let symbol2 = Symbol.for("name");
console.log(symbol2);

// Сравнение символов, созданных с помощью метода for
let symbolWithFor = Symbol.for("name");
let symbolWithFor2 = Symbol.for("name");
console.log(symbolWithFor2 === symbolWithFor); // True



// Метод символа keyFor
let symb = Symbol.for("name");
let nameTest = Symbol.keyFor(symb);
console.log(nameTest);


// Получение ключа с методом for и без него
let currentUser = {
  userName: "Vasya",
  [Symbol.for("password")]: "asdf"
  //   [Symbol("password")]: "asdf"
};
console.log(currentUser[Symbol.for("password")]);
console.log(Object.keys(currentUser));
console.log(Object.getOwnPropertyNames(currentUser));
let password = currentUser[Symbol.for("password")];
console.log(password);



// Метод для просмотра символов в обьекте Object.getOwnPropertySymbols(..name obj..)
console.log(Object.getOwnPropertySymbols(currentUser));


// Просмотр обьекта
let obj1 = { name: "Sergey", age: 28 };
console.log(obj1);

// Получение свойства значения обьекта
console.log(obj1.name);
console.log(obj1["age"]);


// Создание обьекта №1
let newObject = new Object();
newObject.name = "Fred";

console.log(newObject);


// Создание обьекта №2
let obj2 = {};
obj2.name = "Alexey";
console.log(obj2);


// Cоздание обьекта №3
let newObject2 = Object.create({ x: 20, y: 30 });
console.log(newObject2.x, newObject2.y);


// Проверка значения своейства обьекта
newObject2.x = 40;
console.log(newObject2.hasOwnProperty("x"));


// Удаление своейства в обьекте
console.log(newObject2);
delete newObject2.x;
console.log(newObject2);


// Бинарный оператор in
console.log("x" in newObject2);
console.log("s" in newObject2);


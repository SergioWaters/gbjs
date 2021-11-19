
//temperature converter
let tempCel = prompt('put your temperature in celsius');
let tempFar = (9 / 5) * tempCel + 32;
alert(tempFar);

//Vasily admin
let $name = "Василий";
let admin = $name;
console.log(admin);

//operators
/*
1. к 10 прибавляем 10, получаем 20
2. 20 конкатенируется с "10", получаем "2010"
3. присваиваем переменной result строку "2010"
4. с помощью console.log выводим result в консоль
*/
let result = 10 + 10 + "10";
console.log(result);

/*
1. 10 конкатенируется с "10", получаем "1010"
2. "1010" конкатенируется с 10, получаем "101010"
3. присваиваем переменной result строку "2010"
4. с помощью console.log выводим result в консоль
*/
let result = 10 + "10" + 10;
console.log(result);

/*
1. к 10 прибавляем 10, получаем 20
2. к 20 прибавляем "10" с унарным плюсом, получаем 30
3. присваиваем переменной result 30
4. с помощью console.log выводим result в консоль
*/
let result = 10 + 10 + +"10";
console.log(result);

/*
1. 10 делим на строку "" с унарным минусом
2. унарный минус превращает строку в отрицательное число 0, получаем -infinity
3. присваиваем переменной result -infinity
4. с помощью console.log выводим result в консоль
*/
let result = 10 / -"";
console.log(result);

/*
1. 10 делим на строку "2,5" с унарным плюсом
2. унарный плюс превращает строку в NaN
2. присваиваем переменной result undefined
3. с помощью console.log выводим result в консоль
*/
let result = 10 / +"2,5";
console.log(result);

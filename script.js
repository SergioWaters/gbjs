

//------------> Lesson1 JS Basics


'use strict'
//temperature converter
let task1 = document.querySelector(".task__btn1");
task1.addEventListener("click", function () {
  let tempCel = document.querySelector(".input1").value;
  let tempFar = (9 / 5) * tempCel + 32;
  console.log(tempFar);
  let output = document.querySelector(".result1");
  output.innerText = `${tempCel}  по Цельсию - это ${tempFar} по Фаренгейту`;
});

//Vasily admin
let task2 = document.querySelector(".task__btn2");
task2.addEventListener("click", function () {
  let $name = document.querySelector(".input2").value;
  let admin = $name; //без $ выдает "const name void". как я понимаю, где-то в vscode объявлена константа name
  console.log(admin);
  let output = document.querySelector(".result2");
  output.innerText = `Админом назначен: ${admin}`;
});

//operators
/*
1. к 10 прибавляем 10, получаем 20
2. 20 конкатенируется с "10", получаем "2010"
3. присваиваем переменной result строку "2010"
4. с помощью console.log выводим result в консоль
*/
let task3 = document.querySelector(".task__btn3");
task3.addEventListener("click", function () {
  let result = 10 + 10 + "10";
  console.log(result);
  let output = document.querySelector(".result3");
  output.innerText = ` = ${result}`;
});

/*
1. 10 конкатенируется с "10", получаем "1010"
2. "1010" конкатенируется с 10, получаем "101010"
3. присваиваем переменной result строку "101010"
4. с помощью console.log выводим result в консоль
*/
let task4 = document.querySelector(".task__btn4");
task4.addEventListener("click", function () {
  let result = 10 + "10" + 10;
  console.log(result);
  let output = document.querySelector(".result4");
  output.innerText = ` = ${result}`;
});

/*
1. к 10 прибавляем 10, получаем 20
2. к 20 прибавляем "10" с унарным плюсом, получаем 30
3. присваиваем переменной result 30
4. с помощью console.log выводим result в консоль
*/
let task5 = document.querySelector(".task__btn5");
task5.addEventListener("click", function () {
  let result = 10 + 10 + +"10";
  console.log(result);
  let output = document.querySelector(".result5");
  output.innerText = ` = ${result}`;
});

/*
1. 10 делим на строку "" с унарным минусом
2. унарный минус превращает пустую строку в отрицательное число 0, получаем -infinity
3. присваиваем переменной result -infinity
4. с помощью console.log выводим result в консоль
*/
let task6 = document.querySelector(".task__btn6");
task6.addEventListener("click", function () {
  let result = 10 / -"";
  console.log(result);
  let output = document.querySelector(".result6");
  output.innerText = ` = ${result}`;
});

/*
1. 10 делим на строку "2,5" с унарным плюсом
2. унарный плюс, из-за запятой превращает строку в NaN
3. при делении числа на NaN, получаем NaN
4. присваиваем переменной result NaN
5. с помощью console.log выводим result в консоль
*/
let task7 = document.querySelector(".task__btn7");
task7.addEventListener("click", function () {
  let result = 10 / +"2,5";
  console.log(result);
  let output = document.querySelector(".result7");
  output.innerText = ` = ${result}`;
});

//------------->Lesson2 Basic JS operators


/*
1. Объясните почему код даёт именно такие результаты?
Подсказка. Чтобы лучше разобраться возьмите этот код и запустите в отладчике в 
браузере со включенными точками остановки.
*/
//пример 1
/*
1. Создаем переменные a, b, c, d
2. a и b присваеваем значение 1
3. прибавляем 1 к значению $a (префикс инкремент)
4. присваиваем переменной $c значение переменной $a
5. alert(c) выведет 2
*/
'use strict'
let task = document.querySelector(".task__btn");
task.addEventListener("click", function () {
  let a = 1, b = 1, c, d;
  c = ++a;
  alert(c); // ответ: 2

  //пример 2
  /*
  6. присваиваем значение $b переменной $d
  7. постфикс инкремент прибавляет 1 к значению $b
  8. alert(d) выведет 1
  */
  d = b++;
  alert(d); //ответ: 1

  //пример 3
  /*
  9. $a=2, прибавляем 1 (префикс инкремент)
  10. к получившемуся значению прибавляем 2
  11. присваиваем $c значение выражения
  12. alert(c) выведет 5
  */
  c = 2 + ++a;
  alert(c); //ответ: 5

  //пример 4
  /*
  13. к $b прибавляем 2
  14. присваиваем значение выражения переменной $d 
  15. прибавляем к значению $b 1 (постфикс инкремент)
  15. alert(d) выведет 4
  16. alert(a) выведет 3
  17. alert(b) выведет 3
  */
  d = 2 + b++;
  alert(d); //ответ: 4

  alert(a); //3
  alert(b); //3

  //2. Чему будут равны переменные x и a в примере ниже? Написать почему так произошло (описать последовательность действий).
  /*
  1. создаем переменную $a=2
  2. присваиваем $a значение $a * 2
  3. к получившемуся значению $a прибавляем 1
  4. присваиваем переменной $x значение выражения
  5. $a === 4
  6. $x === 5
  */
  let a = 2;
  let x = 1 + (a *= 2);

  let output = document.querySelector(".result");
  output.innerText = ` = ${result}`;
});
/*3. Объявить две переменные a и b и задать им целочисленные произвольные начальные значения.
Затем написать скрипт, который работает по следующему принципу:
- если a и b положительные, вывести их разность (ноль можно считать положительным числом);
- если а и b отрицательные, вывести их произведение;
- * (этот пункт по сложнее, делайте по желанию) если а и b разных знаков, вывести их сумму;
*/
'use strict'
let a = 1;
let b = 3;
let c = a - b;
let d = a * b;
let e = a + b;
if (a >= 0 && b >= 0) {
  alert(`оба положительные -> вычетание ${c}`)
} else if (a < 0 && b < 0) {
  alert(`оба отрицательные -> умножение ${d}`)
} else if (d < 0) {
  alert(`разные знаки -> сложение ${e}`)
} else {
  alert('ни одно условие не сработало')
}

/*
4. Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с 
двумя параметрами. Т.е. например, функция для сложения должна принимать два числа,
складывать их и возвращать результат. Обязательно использовать оператор return.
*/
'use strict'
let a = 3;
let b = 4;

function plusFn(a, b) {
  return (a + b);
}
function minusFn(a, b) {
  return (a - b);
}
function multFn(a, b) {
  return (a * b);
}
function divideFn(a, b) {
  return (a / b);
}

/*
5. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции (использовать switch) выполнить одну из арифметических операций (использовать функции из задания 4) и вернуть полученное значение.
*/
'use strict'
function mathOperation(arg1, arg2, operation) {
  switch (operation) {
    case 'minus':
      return (arg1 - arg2);
    case 'plus':
      return (arg1 + arg2);
    case 'divide':
      return (arg1 / arg2);
    case 'multiply':
      return (arg1 * arg2);
    default:
      console.log('nothing is worked');
  }
}
mathOperation(null, null, null);

/*
6**. (Это задание не является частью курса, можете его не делать, оно для тех кому мало 
обычных заданий, требует времени и возможно гугления, делайте по желанию.)
 
Программа должна спросить у пользователя число, это будет количество денег, которое
он хочет положить на счет в банке. Затем программа должна выдать примерно такое сообщение:
"Ваша сумма в 101 рубль успешно зачислена." - в случае если пользователь ввел 101.
"Ваша сумма в 10020 рублей успешно зачислена." - в случае если пользователь ввел 10020.
"Ваша сумма в 120104 рубля успешно зачислена." - в случае если пользователь ввел 120104.
То есть ваша задача выводить слово «рубль» в правильном падеже, в зависимости от введенного числа.
*/
'use strict'
function recived(money, lastNumber, ending) {
  money = prompt('put your money');
  let moneystr = String(money);
  let moneylng = moneystr.length;
  console.log(moneylng);
  lastNumber = money[moneylng - 1];
  console.log(lastNumber);

  switch (lastNumber) {
    case '1':
      ending = 'ль';
      alert(`your money ${money} руб${ending} recived`);
      break;
    case '2', '3', '4':
      ending = 'ля';
      alert(`your money ${money} руб${ending} recived`);
      break;
    default:
      ending = 'лей';
      alert(`your money ${money} руб${ending} recived`);
      break;
  }
}

/*
Подсказки, что я использовал (ваш подход может отличаться):
1) В javascript нет функции, которая возвращает последнюю цифру, но зато мы можем получить
последний символ из строки достаточно просто.
2) Я использовал String() для приведения к строке
https://codepen.io/IgorKubikov/pen/qQmoJJ?editors=0011
3) Узнать длину строки https://codepen.io/IgorKubikov/pen/vQmRbq?editors=0011
Подробнее можно почитать здесь
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/length
4) Чтобы получить конкретный символ в строке я использовал это
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
5) Я также использовал switch, а конкретно нам нужно будет одно действие
для нескольких case (т.е. если у нас 500 рублей, 47 рублей, 99 рублей и
т.д. – у нас для нескольких цифр на конце одно слово «рублей»).
Это можно посмотреть здесь:
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/switch#Methods_for_Multi-criteria_Case
*/


//------------------> Lesson3 Cicles Arrays Structures
/**
 * Find MAX with forEach
 * 1. задаем массив [arr]
 * 2. предполагаем, что ${arrMax} - первое и максимальное число в массиве
 * 3. проходим массив ${arr} с помощью метода .forEach, 
 * 4. cравниваем каждое значение (arrNum) массива [arr] с ${arrMax}
 * 4. если (arrNum) больше, чем ${arrMax}, то перезаписываем это значение в ${arrMax}
 * 5. .forEach сравнит все значения массива [arr], и запишет максимальное в ${arrMax}
 */
'use strict'
let arr = [1, 2, 3, 4, 5, 6];
let arrMax = [0];
arr.forEach(function (arrNum) {
  if (arrNum > arrMax) {
    arrMax = arrNum;
  }
});
/**
 * MAP method
 * 1. задаем массив [arr]
 * 2. проходим массив ${arr} с помощью метода .map, 
 * 3. прибавим 10 к каждому элементу массива [arr]
 * 4. .map последовательно запишет получившиеся значения в массив [arrPlus10]
 */
'use strict'
let arr = [1, 2, 3, 4, 5, 6];
let arrPlus10 = arr.map(function (arrNum) {
  return arrNum + 10;
});
/**
 * object.assign
 * 1. create odj {user}
 * 2. trying to appent or replace {user.[property]}
 * 3. change property age, using object.assign
 * 4. create doublicate of {user}
 * 5. add propertys gender and regDate to userDoublicate
 */
'use strict'
let user = { name: 'Sergey', age: '34' };
Object.assign(user, { age: "31" });
let userDoublicate = Object.assign({}, user, { age: '30' }, { gender: 'male', regDate: '02.02.02' });
console.log(user);
console.log(userDoublicate);

/**
 * slice
 * 1. create array [arr]
 * 2. get elements from 0 to 3 with slice method (includes 0, but excludes 3, so [0,1,2])
 * 3. put result in [newArr]
 * */
'use strict'
let arr = [1, 2, 3, 4, 5, 6];
let newArr = arr.slice(0, 3);
console.log(newArr);
//-----------------> Lesson 4  Objects

/**
 * split
 * 1. create stroke 'str' with fishtext
 * 2. use .split('<space>') to 'str' will use <space> as break to create array of words
 * 3. write down the result into [strSplited]
 */
'use strict'
let str = 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
let strSplited = str.split(' ');
/**
 * use map, split and join to make capitalized words
 * 1. create stroke 'str' with fishtext
 * 2. use .split('<space>') to 'str' will use <space> as break to create array of words
 * 3. write down the result into [strSplited]
 * 4. func(word) splits every word into letters
 * 5. get [0] element of every word and make it .toUpperCase 
 * 6. put it back to wordSplited
 * 7. .join letters together
 * 8. .join words together
 */
'use strict'
strSplited = strSplited.map(function (word) {
  let wordSplited = word.split('');
  wordSplited[0] = wordSplited[0].toUpperCase();
  return wordSplited.join('');
});
let strCapitalized = strSplited.join(' ');

/**
 * find if there are match in two arrays
 * 1. create two arrays
 * 2. pick shortest one and compare to another
 * 3. 
 */
'use strict'
let strForMatch1 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit Delectus laboriosam'
let arrForMatch1 = strForMatch1.split(' ');
let strForMatch2 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quasi reiciendis corporis nostrum? Voluptas minima dolor, cupiditate excepturi a animi, expedita corporis adipisci praesentium sapiente tenetur nisi porro aspernatur, optio temporibus! Accusamus, veniam nulla autem iste adipisci, blanditiis facere doloribus accusantium obcaecati dolorum iusto deleniti quas molestias hic consectetur deserunt.'
let arrForMatch2 = strForMatch2.split(' ');

let arrMatches = arrForMatch1.filter(function (item) {
  return arrForMatch2.includes(item);
});
console.log(`There are ${arrMatches.length} Matches: ${arrMatches}`);
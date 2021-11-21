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
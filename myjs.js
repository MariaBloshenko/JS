/* 14.02.2022
ТЕМА: ВВЕДЕНИЕ В JAVASCRIPT

Основное домашнее задание задание:
Запрашивать данные у пользователя необходимо с помощью prompt(), а выводить результат с помощью alert().*/

/* Задание 1
Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».*/

let person = prompt('Как Вас зовут?', 'Привет, введите свое имя');
console.log(person)
//---------------------------------------------------------------------------------------
/* Задание 2
Запросите у пользователя год его рождения, посчитайте,
сколько ему лет и выведите результат. Текущий год укажите
в коде как константу*/

let requestYear = prompt('В каком году Вы родились?', 'Введите свой год рождения');
const year = 2022 - requestYear
let yourYear = "Ваш возраст - " + year
console.log(yourYear)
//---------------------------------------------------------------------------------------
/* Задание 3
Запросите у пользователя длину стороны квадрата
и выведите периметр такого квадрата.*/

let square = prompt('Какова длина стороны квадрата?', 'Введите длину')
let perimeter = +square * 4
let perimeterSquare = "Периметр квадрата = " + perimeter + "см"
console.log(perimeterSquare)
//---------------------------------------------------------------------------------------
/* Задание 4
Запросите у пользователя радиус окружности и выведите
площадь такой окружности.*/

let requestCircle = prompt('Каков радиус окружности?', 'Введите параметр')
const Pi = 3.14
let circle = (Pi * (requestCircle ** 2) )
let mainCircle = "Площадь окружности = " + circle + "см"
console.log(mainCircle)
//---------------------------------------------------------------------------------------
/* Задание 5
Запросите у пользователя расстояние в км между двумя
городами и за сколько часов он хочет добраться.
Посчитайте скорость, с которой необходимо двигаться, чтобы
успеть вовремя.*/
let requestDistance = prompt('Какое расстояние между городами?', 'Введите расстояние между городами в км')
let requestTime = prompt('За какое время Вы хотите добраться до желаемого местанахождения?', 'Введите кол-во часов')
let speed = +requestDistance / +requestTime
let mainAnswerDistanceTime = "Вам нужно двигаться со скоростью - " + speed + "км/ч"
console.log(mainAnswerDistanceTime)
//---------------------------------------------------------------------------------------
/* Задание 6
Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро.
Курс валюты храните в константе.*/
let requestCurrencyConverter = prompt('Введите сумму в долл. США, которую необходимо конвертировать в евро')
const rate = 0.88
let dollarToEuro = +requestCurrencyConverter * +rate
alert("Ваша сумма в евро составляет: "+dollarToEuro)
//---------------------------------------------------------------------------------------
/*Задание 7
Пользователь указывает объем флешки в Гб.
Программа должна посчитать сколько файлов размером в 820 Мб помещается на флешку.*/



//---------------------------------------------------------------------------------------


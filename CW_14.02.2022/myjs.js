/* 14.02.2022
ТЕМА: ВВЕДЕНИЕ В JAVASCRIPT

Основное домашнее задание:
Запрашивать данные у пользователя необходимо с помощью prompt(), а выводить результат с помощью alert().
//---------------------------------------------------------------------------------------
/* Задание 1
Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».*/
let person = prompt('Как Вас зовут?', 'Привет, введите свое имя');
alert("Приветствую тебя, "+person)
//---------------------------------------------------------------------------------------
/* Задание 2
Запросите у пользователя год его рождения, посчитайте,
сколько ему лет и выведите результат. Текущий год укажите в коде как константу*/
let requestYear = prompt('В каком году Вы родились?', 'Введите свой год рождения');
const year = 2022 - requestYear
alert("Ваш возраст - "+year+" лет")
//---------------------------------------------------------------------------------------
/* Задание 3
Запросите у пользователя длину стороны квадрата
и выведите периметр такого квадрата.*/
let square = prompt('Какова длина стороны квадрата?', 'Введите характеристику, в см')
let perimeter = +square * 4
alert("Периметр квадрата = "+perimeter+" см")
//---------------------------------------------------------------------------------------
/* Задание 4
Запросите у пользователя радиус окружности и выведите
площадь такой окружности.*/
let requestCircle = prompt('Каков радиус окружности?', 'Введите характеристику, в см')
const Pi = 3.14
let circle = (Pi * (requestCircle ** 2) )
alert("Площадь окружности = "+circle+" см")
//---------------------------------------------------------------------------------------
/* Задание 5
Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться.
Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.*/
let requestDistance = prompt('Какое расстояние между городами?', 'Введите расстояние между городами в км')
let requestTime = prompt('За какое время Вы хотите добраться до желаемого местанахождения?', 'Введите кол-во часов')
let speed = requestDistance / requestTime
alert("Вам нужно двигаться со скоростью - "+Math.round(speed)+" км/ч")
//---------------------------------------------------------------------------------------
/* Задание 6
Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро.
Курс валюты храните в константе.*/
let requestCurrencyConverter = prompt('Введите сумму в долл. США, которую необходимо конвертировать в евро')
const rate = 0.88
let dollarToEuro = requestCurrencyConverter * rate
alert("Ваша сумма в евро составляет: "+dollarToEuro)
//---------------------------------------------------------------------------------------
/*Задание 7
Пользователь указывает объем флешки в Гб.
Программа должна посчитать сколько файлов размером в 820 Мб помещается на флешку.*/
let requestVolumeFlashDrive = prompt('Укажите свой объем USB-флеш-накопителя в Гб')
let volumeFlashDriveMB = (requestVolumeFlashDrive * 1024) / 820
alert("На Ваш USB-флеш накопитель поместится такое количество файлов объемом 820 Мб - "+Math.round(volumeFlashDriveMB))
//---------------------------------------------------------------------------------------
/*Задание 8
Пользователь вводит сумму денег в кошельке и цену одной шоколадки.
Программа выводит сколько шоколадок может купить пользователь и сколько сдачи у него останется.*/
let requestMoney = prompt('Какая сумма денег у Вас есть для покупки сладостей?', 'Введите сумму в гривне')
let requestChocolate = prompt('Какова цена одной вкуснейшей шоколадки?', 'Введите сумму в гривне')
let chocolate = requestMoney / requestChocolate //Вычисляем, сколько сладостей может купить пользователь
let moneyChocolate = requestMoney - (requestChocolate * Math.round(chocolate)) //Вычисляем, сколько денег останется (сдача)
alert("Вы можете купить "+Math.round(chocolate)+" вкусностей и у Вас останется "+moneyChocolate+" гривен сдачи")
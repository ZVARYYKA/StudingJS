let a = '33.333333'
let b = '22.22222'
a = parseFloat(a);
b = parseInt(b);

console.log(a,' ',b);
console.log('Проверка кавычек \" \' \\ \n aa \t fffff"');

var item = ['Nikita ','Dima ','Denis ','Pidor '];
console.log('All name in my massive: \n',item[0],item[1],item[2],item[3],item[4]); 
console.log(item.length);

console.log('\n');

item[4] = item[0]+item[1]+item[2]+item[3]
console.log('All name in one index massive \n' + item[4])


number_index = item.indexOf('Pidor ');
console.log ('Index number for Name Nikita in "item" massive ', number_index)


console.log('\n');

ebat_chislo = (1*2)*(2*3)+(4*234342423)*(3/232412)+9.45453;
console.log('Ebat ya kretin '+ ebat_chislo) //I naxyi?



let NewSand = "Sand";
let SandNew = 1.6;
console.log ('Тип операнда newSand ',typeof NewSand,'Тип операнда SandNew ',typeof SandNew);
NewSand += SandNew;
NewSand += SandNew;
NewSand += SandNew;
NewSand += SandNew;
NewSand += SandNew;
NewSand += SandNew;
NewSand += SandNew;
NewSand += SandNew;
console.log('Значение NewSand ',NewSand);
console.log ('Тип операнда newSand ',typeof NewSand);





let age = 17;
console.log('Возраст человека:',age,'.\n','Сейчас узнаем, кто он')
if (age <= 18) {
console.log('Маладой')  
} else if (age >= 18) {
  console.log('Совершеннолетний')
} else if (age <=65) {
  console.log('Старый')
}
//Оператор if
// Переменная lang может принимать 2 значения: 'ru' 'en'. //Если она имеет значение 'ru', то в //переменную arr запишем массив дней недели на русском языке, а если имеет значение 'en' – то ///на английском. Решите задачу через 2 if, через switch-case и через многомерный массив без ////ифов /и switch.
lang = 'en';

let WeekDay;
if (lang== 'ru') {
  WeekDay = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'];
  console.log('Русские дни недели ',WeekDay);
} else if (lang== 'en') {
  WeekDay = ['Sunday','Monday','Tuesday','Wendsday','Firsday','Friday','Saturday'];
  console.log('English day week ',WeekDay)
  
  
}
//Оператор Switch
//Арабский (Ливанский)	Mar7aba
//Венгерский	Jó napot kívánok
//Испанский	¡Hola!
//Киргизский	Салам!
console.log('Приветствие на 5 разных языках мира,измени переменную на 77 строчке, и выведеться то, что ты хочешь');
let CountryHello = 'Русский';
switch (CountryHello) {
  case 'English':
    console.log('Hello');
    break;
  case 'Арабский':
    console.log('Mar7aba');
    break;
  case 'Венгерский':
    console.log('Jó napot kívánok');
    break;
  case 'Испанский':
    console.log('¡Hola!');
    break;
  case 'Киргизский':
    console.log('Салам!');
    break;
  default: 
    console.log('Я не знаю',CountryHello,'Напиши что нибудь другое');
}



//Заполнение массива данными
let Fullmassive = new Array;//Массив
let AllIndex;//Длина нужного массива
console.log('Сколько индексов заполнить в массиве?');
AllIndex = 51; 
console.log('Хорошо, на ', AllIndex,'значений');

for (let x =0; x<AllIndex;x++) { // Пока х меньше длине массива, добавляем значения
  Fullmassive[x]=0+x;
}
console.log('Посчитали!');
console.log('Длина массива: ',Fullmassive.length);
console.log('Значения массива ',Fullmassive);

document.write('<h1 class = "learning2"> Kolya coder</h1>');


//Перечисление свойства обьекта
// for (let prop in document) { 
//   document.write(prop + "<br>");
// }


//цикл while

// let SecurityCode = prompt('Введите проверочный код'); - ГОВНОКОД!!!!!
// let x = 0;
// while (SecurityCode !=234) {
//   prompt('Неверный код');
//   x++;

// }
// 
console.log('\n')
//Написать нужное количество чисел
let NeedNumber = 2;//нужное значение
let SCHNumber = 1;//счетчик
while (SCHNumber<=NeedNumber) {
  console.log('Число-',SCHNumber);
  SCHNumber++;
}

//do -while
//Страшный соy библиотекаря
console.log('Сколько книг сжечь?');
let AllBook = 10;
let i1 = 0;
do {
  i1++;
  console.log('Сожгли' ,i1,'book');
} while (i1<10);
console.log('АХАХХАХЫВХАХХВАХЫХАХЫХВАХЫХВХАХЫХАХЫВХАХЫВ');

//Функция
function addt (aString) {
  aString += "б";
  console.log(aString);
  return aString;
}
addt('Я долбае')//Добавляет последний символ к строке

//Возведение в четвертную степень
function DoubleNumber (Double) {
  Double = Double * Double * Double * Double;
  console.log('Число, возведенная в степень- ',Double);
  return Double;
}

DoubleNumber(9);


function DateofTOday() {
  right = new Date();
  alert('right')
}
//dызов функции
// DateofTOday() 




function HTMLDate () { //Получение даты
let todayDate = new Date();
  document.write('<h1>Сейчас у нас:</h1> ',todayDate.toDateString());
}


HTMLDate (); 

function GetSquare() { //Площадь квадрата
  let a = 2343;
  let b = 3234234;
  let S = a*b; 
  return S;
}
console.log('Площадь, по заданным значениям: ',GetSquare())

function welcome(yourname = 'Друг') { //Если значение параметра undefined, то оно поменяется "по умолчанию"
  //if (typeof yourname === 'undefined') {
    //yourname = 'Друг';
     
  //}
  return yourname;
}
let erggg = welcome();
console.log(erggg);

// Использование обьекта arguments в функции
function ZdarovaPacani() {
  let welcome = 'Добро пожаловать ';
  for( i = 0; i < arguments.length; i++) {
    welcome = welcome+arguments[i]+' ';
  }
  return welcome;
}
console.log(ZdarovaPacani('Chrispother ','Петя Бухало'));

//анонимная функция, можно к ней обращаться по имени переменной
var doTheThing = function (thingToDo) {
  console.log('Сделать следущее ', thingToDo);
}
console.log(doTheThing);

//опять анонимная функция
var myVariable = 'Я нахожусь вне функции.';
(function() {
  var myVariable = 'Я нахожусь  в этой анонимной функции';
  console.log(myVariable);
  
})();
console.log(myVariable);

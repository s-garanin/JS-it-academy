let lastname = prompt("Введите вашу фамилию", "Иванов");
let name = prompt("Введите ваше имя", "Иван");
let fathername = prompt("Введите ваше отчество", "Иванович");
let age = prompt("Введите ваш год рождения", "2000");
let sex = confirm("Ваш пол мужской?");
let month = prompt("Ввидите номер месяца рождения", "1");
let children = prompt("Сколько у вас детей", "3")
let nowyear = 2020;
let nowmonth = 1;
let tenager = ((nowyear - age) >= 18) ? "совершеннолетний" : "несовершеннолетний";
if (children < 1) {
    child = "У вас нет детей"
} else {
    child = `У вас ${children} детей`
};
age = nowyear - age;
if (month > nowmonth) {
    age = age - 1
} else {
    age = age
};
if (sex) {
    sex = "мужской"
} else {
    sex = "женский"
};

alert(`${lastname} ${name} ${fathername} 
Вам ${age} год и ${12 - month} месяцев
Пол ${sex}
Вы ${tenager}
${child} `);
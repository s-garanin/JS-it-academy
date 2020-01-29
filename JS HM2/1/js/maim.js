let lastname = prompt('Введите вашу фамилию', 'Иванов');
let name = prompt('Введите ваше имя', 'Иван');
let fathername = prompt('Введите ваше отчество', 'Иванович');
let age = prompt('Введите ваш год рождения', '2000');
while(isNaN(age) || !age) {
    alert('ОШИБКА! Введите цифры!');
    age = prompt('Введите ваш год рождения', '2000');
}
let sex = confirm('Ваш пол мужской?');
let month = prompt('Ввидите номер месяца рождения', '1');
while(isNaN(month) || !month) {
    alert('ОШИБКА! Введите цифры!');
    month = prompt('Ввидите номер месяца рождения', '1');
}
let children = prompt('Сколько у вас детей', '3')
while(isNaN(children) || !children) {
    alert('ОШИБКА! Введите цифры!');
    children = prompt('Сколько у вас детей', '3')
}
let nowyear = 2020;
let nowmonth = 1;
let tenager = ((nowyear - age) >= 18) ? 'совершеннолетний' : 'несовершеннолетний';
child = children < 1 ? 'У вас нет детей' : `У вас ${children} детей`;
age = nowyear - age;
age = month > nowmonth ? age-=1 : age;
sex = sex ? 'мужской' : 'женский';
alert(`${lastname} ${name} ${fathername} 
Вам ${age} год и ${12 - month} месяцев
Пол ${sex}
Вы ${tenager}
${child} `);
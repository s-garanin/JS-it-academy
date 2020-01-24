var a = prompt('Введите a');
var b = prompt('Введите b');
var c = prompt('Введите c');
function solveEquation(a, b, c) {
    var d = b ** 2 - 4 * a * c;
    var x;
    if (d < 0) {
        alert('Корней нет');
        return undefined;
    } else if (d === 0) {
        x = (-b / (2 * a));
        alert(`x равен ${x}`);
        return x;
    } else if (d > 0) {
        var x1 = ((-b + d ** 0.5) / (2 * a));
        var x2 = ((-b - d ** 0.5) / (2 * a));
        alert(`x1 = ${x1} ,x2 = ${x2}`);
        return x1, x2;
    }
};
console.log(solveEquation(a, b, c));


let a = prompt('Введите a');
let b = prompt('b');
let c = prompt('c');
function solveEquation(a, b, c) {
    let d = b ** 2 - 4 * a * c;
    let x;
    if (d < 0) {
        alert('Корней нет');
        return null;
    } else if (d === 0) {
       let x = (-b / (2 * a));
        alert(`x равен ${x}`);
        return x;
    } else if (d > 0) {
        let x1 = ((-b + d ** 0.5) / (2 * a));
        let x2 = ((-b - d ** 0.5) / (2 * a));
        alert(`
        x1 = ${x1} ,
        x2 = ${x2}`);
        return x1, x2;
    }
};
console.log(solveEquation(a, b, c));



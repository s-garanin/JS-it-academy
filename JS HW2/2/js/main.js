function solveEquation(a, b, c) {
    let d = b ** 2 - 4 * a * c;
    let x;
    if (d < 0) {
        return [];
    } else if (d === 0) {
       let x = (-b / (2 * a));
        return [x1];
    } else if (d > 0) {
        let x1 = ((-b + d ** 0.5) / (2 * a));
        let x2 = ((-b - d ** 0.5) / (2 * a));
        return [x1, x2];
    }
};
console.log(solveEquation(3, -4, 1));



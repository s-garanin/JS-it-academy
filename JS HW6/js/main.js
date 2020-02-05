let calculator = (function () {
    let result = 0;
    return {
        percent(x) {
            result %= x;
        },
        sqrt(x) {
            result = Math.sqrt(x);
        },
        clear() {
            result = 0;
        },
        add(x) {
            result += x;
        },
        substract(x) {
            result -= x;
        },
        multiply(x) {
            result *= x;
        },
        divide(x) {
            result /= x;
        },
        pow(x) {
            result **= x;
        },
        print() {
            return result;
        }
    };
})();
calculator.percent(12);
calculator.print();
calculator.sqrt(5);
calculator.print();
calculator.add(15);
calculator.print();
calculator.substract(6);
calculator.print();
calculator.multiply(6);
calculator.print();
calculator.divide(3);
calculator.print();
calculator.pow(10);
calculator.print();
console.log(calculator.print());



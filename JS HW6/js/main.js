function plus() {
    let num1, num2, result;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    result = num1 + num2;
    document.getElementById('out').innerHTML = result;
}

function minus() {
    let num1, num2, result;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    result = num1 - num2;
    document.getElementById('out').innerHTML = result;
}

function share() {
    let num1, num2, result;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    result = num1 / num2;
    document.getElementById('out').innerHTML = result;
}

function multiply() {
    let num1, num2, result;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    result = num1 * num2;
    document.getElementById('out').innerHTML = result;
}

function square() {
    let num1, num2, result;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    result = num1 ** 2 || num2 ** 2;
    document.getElementById('out').innerHTML = result;
}

function radical() {
    let num1, num2, result;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    result = num1 ** 0.5 || num2 ** 0.5;
    document.getElementById('out').innerHTML = result;
}

function percent() {
    let num1, num2, result;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    result = num1 / 100 * num2;
    document.getElementById('out').innerHTML = result;
}

function cube() {
    let num1, num2, result;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    result = num1 ** 3 || num2 ** 3;
    document.getElementById('out').innerHTML = result;
}

function stage() {
    let num1, num2, result;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    result = num1 ** num2;
    document.getElementById('out').innerHTML = result;
}

function clearr1() {
    document.getElementById('n1').value = '';
    document.getElementById('n2').value = '';
    document.getElementById('out').innerHTML = '';
}



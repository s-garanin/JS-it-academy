let a = [2, 4, 60, 8, 10];
let c = max(a);
function max(a) {
    let b = a[0];
    for(let i = 0; i < a.length; i++) {
        if (b < a[i]) 
            b = a[i];
    }
    return b;
}
alert(c);
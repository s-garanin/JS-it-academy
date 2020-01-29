function max(array) {
    let d = 0;
    for(let i = 0; i < array.length; i++) {
        if (d < array[i]) 
            d = array[i];
    }
    return d;
}
console.log(max([2, 4, 60, 8, 10]))

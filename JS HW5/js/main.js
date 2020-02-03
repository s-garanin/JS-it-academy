function unique(array) {
    let reserve = [];
    let out = [];
    let j = 0;
    for(let i = 0; i < array.length; i++) {
        let item = array[i];
         if(reserve[item] !== 1) {
               reserve[item] = 1;
               out[j] = item;
               j++;
         }
    }
    return out;
}
console.log(unique([1, 1, 2, 0, 2]))
///////////////////////////////////////////////

function unique1(array) {
    uniq = [];
    for (let i = 0; i < array.length; i++) {
        if (!uniq.includes(array[i])) {
            uniq.push(array[i]);
        }
    }
    return uniq;
}

console.log(unique1([1, 1, 2, 0, 2]));

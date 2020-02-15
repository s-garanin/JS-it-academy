let array = [0, 1, 1.5, 17, 9, 0.5];
let paparray = array.filter(inRange(1, 10));
function inRange(min, max){
    return function(item){
        return item >= min && item <= max;
    }
}
console.log(paparray);
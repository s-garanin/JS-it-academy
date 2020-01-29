function treeSum(array) {
    let sum = 0;
    for(let i = 0; i < array.length; i++){
       if (typeof array[i] === 'object') {
           sum += treeSum(array[i]);
       } else {
           sum += array[i];
       } 
    }
    return sum;
}
console.log(treeSum([5, 7,
    [4, [2], 8, [1, 3], 2],
    [9, []],
    1, 8
]));

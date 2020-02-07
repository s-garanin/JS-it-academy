// class HashStorageFunc {
//     constructor() {
//         this.data = {};
//     }
//     addValue(key, value)
// }

function HashStorageFunc() {
    this.addValue = function (key, value) {
        this[key] = value;
    }
    this.getValue = function (key) {
        return this[key];
    }
    this.deleteValue = function(key) {
    if (this.key) {
        delete this[key];
        return true;
    }
    return false;
    }
    this.getKeys = function() {
        return Object.keys(this);
    }
}
let drinkStorage = new HashStorageFunc();

drinkStorage.addValue('milk', 'non-alc');
drinkStorage.addValue('orange juice', 'non-alc');
drinkStorage.addValue('wine', 'alc');
drinkStorage.addValue('mineral water', 'non-alc');
drinkStorage.addValue('coke', 'non-alc');
console.log( drinkStorage.getValue('wine') );
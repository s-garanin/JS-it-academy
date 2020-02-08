// class HashStorageFunc {
//     constructor() {
//         this.data = {};
//     }
//     addValue(key, value)
// }
class HashStorageFunc {
    constructor() {
        this.addValue = function (key, value) {
            this[key] = value;
        };
        this.getValue = function (key) {
            return this[key];
        };
        this.deleteValue = function (key) {
            if (this.key) {
                delete this[key];
                return true;
            }
            return false;
        };
        this.getKeys = function () {
            return Object.keys(this);
        };
    }
}
let drinkStorage = new HashStorageFunc();

drinkStorage.addValue('soda', 'non-alc');
drinkStorage.addValue('juice', 'non-alc');
drinkStorage.addValue('beer', 'alc');
drinkStorage.addValue('mineral water', 'non-alc');
drinkStorage.addValue('wine', 'alc');
console.log( drinkStorage.getValue('wine') );
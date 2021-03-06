function HashStorage() {
    let obj = {}
    this.addValue = function (key, value) {
        obj[key] = value;
    };
    this.getValue = function (key) {
        return obj[key];
    };
    this.deleteValue = function (key) {
        if (obj.key) {
            return delete obj.key;
        }
        return false;
    };
    this.getKeys = function () {
        return Object.keys(obj);
    };
}
let drinkStorage = new HashStorage();

drinkStorage.addValue('soda', 'non-alc');
drinkStorage.addValue('juice', 'non-alc');
drinkStorage.addValue('beer', 'alc');
drinkStorage.addValue('mineral water', 'non-alc');
drinkStorage.addValue('wine', 'alc');
console.log(drinkStorage.getValue('wine'));
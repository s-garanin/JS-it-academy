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



function foo () {
    HashStorage.call(this);
    let a = this.addValue;
    this.addValue = function(key, value) {
        a.call(this, key, value);
    }
}
let bar = new foo();



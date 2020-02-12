function HashStorage() {
    this._obj = {};
    this.addValue = function (key, value) {
        this._obj[key] = value;
    };
    this.getValue = function (key) {
        return this._obj[key];
    };
    this.deleteValue = function (key) {
        if (this._obj.key) {
            return delete this._obj.key;
        }
        return false;
    };
    this.getKeys = function () {
        return Object.keys(this._obj);
    };
}
let drinkStorage = new HashStorage();



function foo() {
    HashStorage.call(this);
    let parrentHash = this.addValue;
    this.addValue = function (key, value) {
        a.call(this, key, value);
        this.getStas();
    }
    this.getStas = function() {
        console.log('Stas');
        
    }
}
let bar = new foo();


function sos() {
    HashStorage.call(this);
    this.getVasya = function() {
        console.log('Vasya');
        
    }

}



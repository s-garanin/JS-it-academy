function HashStorage() {
    this._obj = {};
}
HashStorage.prototype.addValue = function (key, value) {
    this._obj[key] = value;
}
HashStorage.prototype.getValue = function (key) {
    return this._obj[key];
};
HashStorage.prototype.deleteValue = function (key) {
    if (this._obj.key) {
        return delete this._obj.key;
    }
    return false;
};
HashStorage.prototype.getKeys = function () {
    return Object.keys(this._obj);
};



Foo.prototype = Object.create(HashStorage.prototype);
Foo.prototype.constructor = Foo;



function Foo() {
    HashStorage.call(this);
}
Foo.prototype.addValue = function (key, value) {
    HashStorage.prototype.addValue.call(this, key, value);
    this.getStas();
}
Foo.prototype.getStas = function () {
    console.log('Stas');
}


Sos.prototype = Object.create(HashStorage.prototype);
Sos.prototype.constructor = Sos;



function Sos() {
    HashStorage.call(this);
}
Sos.prototype.getVasya = function () {
    console.log('Vasya');
}








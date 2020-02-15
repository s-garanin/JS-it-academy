class HashStorage {
    constructor() {
        this._obj = {};
    }
    addValue(key, value) {
        this._obj[key] = value;
    }
    getValue(key) {
        this._obj[key];
    }
    deleteValue(key) {
        if (this._obj.key) {
            return delete this._obj.key;
        }
        return false;
    }
    getKeys() {
        return Object.keys(this._obj);
    }
}

class Foo extends HashStorage {
    addValue(key, value) {
        super.addValue(key, value);
        this.getStas();
    }
    getStas() {
        console.log('Stas');
    }
}

class Sos extends HashStorage {
    getVasya() {
        console.log('Vasya');
    }
}
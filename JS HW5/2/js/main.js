function deepEqual(a, b) {
    if (a === b) {
        return true;
    }
    if (Object.keys(a).length !== Object.keys(b).length) {
        return false;
    }
    if (!(a instanceof Object || b instanceof Object)) {
        return false;
    }
    for (let key in a) {
        if (!deepEqual(a[key], b[key])) {
            return false;
        }
    }
    return true;
}
console.log(deepEqual({a: 9, b: [1, 2]}, {a: 9, b: [1, 2]}));
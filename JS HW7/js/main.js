const person = {
    name: 'Stanislav'
}
function info(phone, email) {
    console.log(`Имя: ${this.name}, Tel: ${phone}, Email: ${email}`)
}
function Mybind(fn, context, ...rest) {
    return function (...args) {
        return fn.apply(context, args);
    }
}
Mybind(info, person)('375296433353', 'sgaranin@inbox.ru');





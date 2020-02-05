const person = {
    name: 'Stanislav'
}
function info(phone, email) {
    console.log(`Имя: ${this.name}, Tel: ${phone}, Email: ${email}`)
}

function bind(fn, context, ...rest) {
    return fn.bind(context, ...rest)
}
 bind(info, person)('375296433353', 'sgaranin@inbox.ru');






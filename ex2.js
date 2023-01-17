// задание 2

let x
x = 'true'
// x = 8
// x = true
let xType = typeof x

switch (xType) {
    case 'number':
        console.log('x — число');
        break;
    case 'string':
        console.log('x — строка');
        break;
    case 'boolean':
        console.log('x — логический тип');
        break;
    default:
        console.log('Тип x не определен')
}

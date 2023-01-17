// задание 1

let input = prompt('Пожалуйста введите число');
let inputType = typeof +input;

if (inputType === 'number' && !isNaN(input)) {
    if (input % 2 === 0) {
        alert('Вы ввели четное число')
    } else {
        alert('Вы ввели нечетное число')
    }
} else {
    alert('Упс, кажется, вы ошиблись')
}
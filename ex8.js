// задание 8

let myMap = new Map([
    [1, 'prop1'],
    ['string', 'prop2'],
    [true, 'prop3']
]
)

for (let keyProp of myMap) {
    console.log(`Ключ - ${keyProp[0]}, значение - ${keyProp[1]}`)
}
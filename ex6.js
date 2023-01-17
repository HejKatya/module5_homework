// заданиие 6

let arr1 = [1, 1, 1, 1, 1]

// arr1 = [1, 2, 3, 4, 5]

let result = true

for (let i = 0; i < arr1.length - 1; i++) {
    if (arr1[i] !== arr1[i + 1]) {
        result = false
    }
}

console.log(result)

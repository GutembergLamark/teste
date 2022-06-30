let list = [1, 2, 3, 4, 5, 6, 7, 9, 10]

function test(arr) {
    let soma = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            soma += arr[i]
        }
    }
    return soma
}

console.log(test(list))
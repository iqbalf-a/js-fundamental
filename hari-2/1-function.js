// ada 5 cara


// reguler/declaration function
function add(param1 = 10, param2 = 20) {
    const result = param1 + param2
    return result
}

function pengurangan(param1, param2) {
    const result = param1 - param2
    return result
}

function perkalian(param1, param2) {
    const result = param1 * param2
    return result
}

function pembagian(param1, param2) {
    const result = param1 / param2
    return result
}

function sisabagi(param1, param2) {
    const result = param1 % param2
    return result
}
const result = add(1, 2)
console.log(result)

// anonymous function
// function (param1, param2) {
//     return param1 + param2
// }

// expression function
let a = function (param1, param2) {
    return param1 + param2
}
// a(10, 30)
console.log(a(10, 20))

// arrow function
const add3 = (param1, param2) => {
    return param1 + param2
}

// iife(intermediate invoke function expression) 
((text) => {
    console.log(text)
})('ini apa co');

(() => {
    console.log('ini apa co')
})()
const Soal1 = (param1, param2) => `${param1} + ${param2} = ${param1 + param2}, ${param1} * ${param2} = ${param1 * param2}, ${param1} - ${param2} = ${param1 - param2},`

console.log(Soal1(3, 4))


const isEven = (n) => n % 2 == 0 ? true : false


function filter(numbers, isEven) {
    let even = []
    let odd = []
    numbers.forEach(element => {
        if (isEven(element)) {
            even.push(element)
        } else {
            odd.push(element)
        }
    });
    return {
        even,
        odd
    }
}

const input = [1, 2, 3, 4, 5, 6, 7]

const result = filter(input, isEven)
console.log(result)
console.log(result.even)
console.log(result.odd)
function Pyramid() {
    let row = 10
    let result = ''
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= i; j++) {
            result += '*'
        }
        result += '\n'
    }
    console.log(result)
}

Pyramid()
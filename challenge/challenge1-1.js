function FizzBuzz() {
    let angka = 20
    for (let i = 1; i <= angka; i++) {
        if (i % 5 == 0 && i % 2 == 0) {
            console.log('FIZZBUZZ')
        } else if (i % 2 == 0) {
            console.log('BUZZ')
        } else if (i % 5 == 0) {
            console.log('FIZZ')
        } else {
            console.log(i)
        }
    }
}

FizzBuzz();
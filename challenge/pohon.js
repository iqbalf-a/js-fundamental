function Pohon() {
    let angka = 4
    let result = ''
    for (let i = 0; i < angka; i++) {
        for (let j = angka - i; j > 1; j--) {
            result += ' '
        }
        for (let j = 0; j <= i; j++) {
            result += '* '
        }
        result += '\n'
    }

    console.log(result)
}

Pohon()
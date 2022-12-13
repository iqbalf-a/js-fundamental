function soal1(a, b) {
    if (a > b) {
        console.log(`${a} is greater than ${b}`);
    } else if (a < b) {
        console.log(`${a} is smaller than ${b}`);
    } else {
        console.log(`${a} = ${b}`);
    }
}

function soal2(a) {
    return (a % 2 == 0 ? `${a} is even number` : `${a} is odd number`)
}

soal1(4, 5);

console.log(soal2(4));
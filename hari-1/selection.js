// truthy
// nilai yang akan dianggap benar

// falsy
// nilai yang akan dianggap salah
// false, 0, -0, "", null, undefined, NaN

let var1 = 'akuh';

if (var1) {
    console.log('truthy');
} else {
    console.log(var1);
}

let var2 = 80;
switch (var2) {
    case 100:
        console.log("Full bre")
        break
    case 50:
        console.log('setengah')
        break
    default:
        console.log('ehh')
}

let number = 10;
let isGenap = number % 2 === 0;
console.log(isGenap ? "Genap" : "Ganjil")
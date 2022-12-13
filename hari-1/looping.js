// for (let i = 1; i < 5; i++) {
//     console.log(i);
// }

// let angka = 0
// while(angka<5) {
//     console.log(angka)
//     angka++
// }

// do while

const days = ["senin", 'selasa', 'rabu']

days.forEach(element => {
    console.log(element)
});

// index
for(let dayIdx in days) {
    console.log(days[dayIdx])
}

// data
for (const iterator of days) {
    console.log(iterator)
}

// index
for (const key in days) {
    if (Object.hasOwnProperty.call(days, key)) {
        const element = days[key];
        console.log(element)
    }
}
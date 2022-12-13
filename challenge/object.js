let ANJING = {};

console.log(ANJING);

ANJING = {
    name: 'Namanya si anjing',
    legs: 4,
    color: 'Belu',
    age: 24,
    bark: function () {
        return 'GUK GUK'
    }
}

for (const key in ANJING) {
    console.log(ANJING[key])
}

ANJING.breed = 'BullD'
ANJING.getDogInfo = function() {
    return ANJING
}

// for (const key in ANJING) {
//     console.log(ANJING[key])
// }

console.log(ANJING.getDogInfo)
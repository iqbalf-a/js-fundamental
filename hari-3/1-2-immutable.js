// destructuring
// merubah properti yang ada pada object menjadi variable

let person = {
    name: 'person',
    age: 20,
    gender: 'male',
    address: 'ragunan',
    hobi: 'baca baca'
}


let {
    name,
    age,
    gender,
    ...otherObject
} = person;

console.log(otherObject)

// let age = person.age //tanpa destructuring

// let{age} = person //dengan destructuring

// console.log(age)

// destructuring array
let days = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"];
let [hari1, hari2, hari3, ...otherDays] = days;

console.log(otherDays)
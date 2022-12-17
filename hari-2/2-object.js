// object adalah sebuah variabel yang menyimpan nilai (properti) dan fungsi (method)
// object literal
const person = {
    name: 'Ini Nama',
    alamat: 'Alamat',
    sayHello: function () {
        return 'Aloo'
    }
}

// object membuat object baru
const person3 = new Object()
person3.name = 'aku'

console.log(person3)

console.log(person.sayHello())

function Person2(name, age) {
    let person = {};
    person.name = name;
    person.age = age;
    person.sayHello = function () {
        return 'Aloo'
    }
    return person
}

// console.log(Person2('Person1', 2));


// menggunakan fungsi constructor
function AloSaya(name, age, role) {
    this.name = name;
    this.age = age;
    this.role = role;
    this.sayHello = function () {
        return 'Aloo ' + this.name
    };
}

const alo = new AloSaya('ian', 2, 'emem')

console.log(alo)
// delete alo.age
// console.log(alo)

console.log(alo['sayHello']())

for (let key in alo) {
    console.log(alo[key])
}
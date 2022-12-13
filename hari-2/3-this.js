console.log(this)

function fn1() {
    return this
}

console.log(fn1())

const person = {
    name: 'asd',
    age: 2,
    sayHello: function () {
        return 'helo ' + this.name
    },
    getModule: () => {
        return this === module.exports
    }
}

console.log(person.sayHello())

const animal = {
    name: 'cet'
}
animal.say = person.sayHello
console.log(animal.say())

console.log(person.getModule())





function fooz(name, age){
    let address = 'ragunan';
    console.log(name, age, this.address)
}

const obj = {
    address: 'sukaraja'
}

// fooz()


// 1. Pakai array sebagai parameter apply()
fooz.apply(obj, ['Ade', 25])

// 2. Pakai parameter variadic call()
fooz.call(obj, 'ade', 25)

// 3. Ditampung ke dalam variable bind()
const foozBind = fooz.bind(obj)
foozBind('ade', 25)
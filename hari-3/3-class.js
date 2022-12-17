function Person1(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function () {
        return 'Hello'
    }
}

const AKuh = new Person1('Akuuh', 20)
console.log(AKuh)

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.sayHello = function () {
            return 'Hello'
        }
    }

    // method setage yang pertama tidak akan digunakan. method setage yang terakhir yang hanya bisa digunakan 
    setAge = (name, age) => {
        this.name = name;
        this.age = age;
    }

    setAge = (age) => {
        this.age = age;
    }

    getAge = () => {
        return this.age
    }
}

// tidak ada abstract dan interface di class JS, hanya ada extens

class Student extends Person{
    constructor(name, age, major) {
        super(name, age)
        this.major = major
    }

    setMajor = (major) => {
        this.major = major
    }

    getMajor = () => {
        return this.major
    }
}

const Ade = new Person('ade', 30)
Ade.name = 'Zulkar'

console.log(Ade)
console.log(Ade.getAge())

// function Animal(name, energy) {
//     let animal = {}
//     animal.name = name
//     animal.energy = energy

//     animal.eat = function (amount) {
//         this.energy += amount
//     }

//     animal.sleep = function (length) {
    //         this.energy += length
//     }

//     animal.play = function (length) {
//         this.energy -= length
//     }
// }

const Leo = Animal("Leo", 7)
const Snoop = Animal("Snoop", 10)
// 1. share method
const animalMethods = {
    eat(amount) {
        console.log(`${this.name} is eating`)
        this.energy += amount
    },
    sleep(length) {
        this.energy += length
    },
    play(length) {
        this.energy -= length
    }
}

function Animal(name, energy) {
    let animal = {}
    animal.name = name
    animal.energy = energy
    animal.eat = animalMethods.eat
    animal.sleep = animalMethods.sleep
    animal.play = animalMethods.play
    return animal
}

// 2. prototype
function Animal(name, energy) {
    let animal = Object.create(Animal.prototype)
    animal.name = name
    animal.energy = energy

    return animal
}

Animal.prototype.eat = function (amount) {
    this.energy += amount
}

Animal.prototype.sleep = function (length) {
    this.energy += length;
}

Animal.prototype.play = function (length) {
    this.energy -= length
}


function Animal2(name, energy) {
    let animal = Object.create(animalMethods)
    animal.name = name
    animal.energy = energy

    return animal
}

const leo = Animal2('leo', 7)

console.log('222', leo)
leo.eat(30)
// console.log(leo.eat(50))

// setiap fungsi dan objek di JS mempunyai properti prototype
// prototype adalah parent, jadi ketika tidak menemukan properti di objek / fungsi yang dibuat maka JS akan melihat ke parent yaitu prototype (inheritance)
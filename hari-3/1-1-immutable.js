// primitif -> sifatnya immutable

let name1 = 'enigma'
let name2 = name1
name2 = 'aku'
// name1 tidak berubah karena primitif (past by value)


// reference
let obj = {
    name3: 'enigma'
}

let obj2 = obj
obj2.name3 = 'aku'
// name3 pada obj dan obj2 akan berubah karena reference (pas by reference)

let obj3 = Object.assign({}, obj) // object assign
obj3.name3 = 'sulton'

let obj4 = {
    ...obj
} //spread
obj4.name3 = 'ade'

// pass by reference deep object
let deepObj = {
    name: 'sulton',
    test: {
        name: 'ade'
    }
}

let deepObj1 = {
    ...deepObj,
    test: {
        ...deepObj.test
    }
}
deepObj1.test.name = ' zulkarnain'

console.log(deepObj)
console.log(deepObj1)

let array1 = [1, 2, 3, 4, [10, 20, 30]]
// let array2 = [...array1]
// let array2 = [...array1, [...array1[4]]]

// array2[4][0] = 100

// let arrayClone = []
// array1.forEach((element, index) => {
//     (array2[index] = element)
// });

// arrayClone[4][0] = 100

let arrayClone5 = JSON.parse(JSON.stringify(array1))
arrayClone5[4][0] = 100
console.log(array1)
console.log(arrayClone5)
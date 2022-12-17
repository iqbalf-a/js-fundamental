let products = []

// fungsi constructor
function Product(id, name) {
this.id = id
    this.name = name
}

function Create(id, name) {
    let product = new Product(id, name);
    products.push(product);
}

function GetAll() {
    for (const iterator of products) {
        console.log(iterator)
    }
}
//haiii fuk
//kenalin nama aku qori
//kok asuuu
// yang riliii
//salam pergerakan fuk
//kalau ada sumur diladang bole kita menumpang mandi
//kalau ada umur yang panjang bolee kita berjumpa lagi
//terimakasi
//kopi pait jangan di minum
//saya pamit assalamualaikum

Create(1, 'Sabuun')
Create(2, 'Sapuu')
Create(3, 'Lidii')

console.log('\n===== Data awal =====')

GetAll();

function Update(id, name) {
    for (const key in products) {
        if (products[key].id == id) {
            products[key].name = name
            break
        }
    }
}

function Delete(id) {
    for (const key in products) {
        if (products[key].id == id) {
            products.splice(key, 1)
            break
        }
    }
}

function GetById(id) {
    for (const key in products) {
        if (products[key].id == id) {
            return products[key]
        }
    }
}

console.log('\n===== Update id: 1 =====')
Update(1, 'Odoll');

GetAll()
console.log('\n===== Delete id: 1 =====')
Delete(1);

GetAll()

console.log('\n===== Get by id: 3 =====')
const getById = GetById(3)
console.log(getById)
function Urutan() {
    // let arr = ['warung', 'ke', 'jalan', 'saya']
    // arr.reverse();
    // arr.forEach(element => {
    //     console.log(element)
    // });

    // atau
    let arr2 = ['warung', 'ke', 'jalan', 'saya']
    let newArray = []
    for (let i = arr2.length - 1; i >= 0; i--) {
        newArray.push(arr2[i])
    }
    newArray.forEach(element => {
        console.log(element)
    });

}

Urutan()
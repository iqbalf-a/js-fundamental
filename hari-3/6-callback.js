/*
Callback adaah fungsi yang akan dieksekusi stelah fungsi lain selesai
*/

function add(num1, num2, callback) {
    let result;
    setTimeout(() => {
        result = num1 + num2;
        callback(result)
    }, 3000)

    console.log('dalam fungsi add', result)
}

// add(10, 2, (result) => {
//     console.log(result)
// })

function doStep1(init, cb) {
    let result = init
    setTimeout(() => {
        result += 1
        cb(result)
        
    });
}

function doStep2(init, cb) {
    let result = init
    setTimeout(() => {
        result += 2
        cb(result)
        
    });
}

function doStep3(init, cb) {
    let result = init
    setTimeout(() => {
        result += 1
        cb(result)
        
    });
}

function doOperation() {
    doStep1(0, (result) => {
        doStep2(result, (result1) => {
            doStep3(result1, (result2) => {
                console.log(`result: ${result2}`)
            })
        })
    })
    // let result = 0
    // result = doStep1(result)
    // result = doStep2(result)
    // result = doStep3(result)

}

doOperation()
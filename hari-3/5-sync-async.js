function sync() {
    console.log(1)
    console.log(2)
    console.log(3)
}

function async () {
    setTimeout(() => {
        console.log(1)
    }, 0);
    setTimeout(() => {
        console.log(2)
    }, 3000)
    console.log(3)
}

// sync()
// console.log('=========')
// async()

// 1. fetch ke API


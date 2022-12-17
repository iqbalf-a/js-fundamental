const doStep1 = (init) => new Promise((resolve) => {
    setTimeout(() => {
        const result = init + 1;
        resolve(result)
    });
});
const doStep2 = (init) => new Promise((resolve) => {
    setTimeout(() => {
        const result = init + 2;
        resolve(result)
    });
});
const doStep3 = (init) => new Promise((resolve, reject) => {
    setTimeout(() => {
        const result = init + 3;
        resolve(result)
    });
    // reject('error')
});

async function doOperation() {
    // doStep1(0)
    //     .then((result) => doStep2(result))
    //     .then((result) => doStep3(result))
    //     .then((result) => console.log(`result : ${result}`))


    // handle error async awat dengantry catch
    try {
        let result = 0;
        result = await doStep1(0);
        result = await doStep2(result);
        result = await doStep3(result);

        console.log(`result: ${result}`)
    } catch (error) {
        console.log(error)

    }


}

doOperation()
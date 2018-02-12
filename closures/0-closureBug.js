// create a empty array and fill it with values
// puts in a bunch of func in array

function makeFunctionArray() {
    const  arr = [ ]

    for (let i = 0 ; i<5; i++){
        arr.push(function () {
            console.log(i)
        })
    }
    return arr
}

const functionArr = makeFunctionArray()
functionArr[0]()
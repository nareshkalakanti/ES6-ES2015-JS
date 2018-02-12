function map(arr, fn) {
    const newArr = []

    arr.forEach(function (val) { // invokes fun on values without taking return
        newArr.push(fn(val)) // push result of running that fun on the val
    })
    return newArr
}

function addOne(num) {
    return num+1

}

const x = [0,1,2,3]

console.log(map(x,addOne))
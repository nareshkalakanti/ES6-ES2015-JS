function addOne(num) {
    throw new Error('oh no, an error !') // dumps call stack to console when there is an error
}

function getNumber() {
    return addOne(10)
}

function c() {
    console.log(getNumber()+getNumber())  //11
}
//invoke
c()
function addOne(num) {
    return num+1
}

function getNumber() {
    return addOne(10)
}

function c() {
    console.log(getNumber()+getNumber())  //11
}
//invoke
c()
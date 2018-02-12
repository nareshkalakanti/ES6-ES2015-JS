
//console.log(thisIsAConst) // this is not defined

//Weird this about JS this is called hoisting and which basically means it takes definition
//of something and hoist it to very top of the file and does that first
console.log(thisIsAVar) // undefined

thisIsHoisted() // function hoisting

thisIsNotHoisted() // Error : thisIsNotHoisted is not defined i.e const cannot be created for an anonymous function



const thisIsAConst = 50

//thisIsAConst++ // error

let thisIsAlet = 51

thisIsAlet = 50
thisIsAlet++
console.log(thisIsAlet)


const obj = { }

//obj = {}  // error

obj.a = 'a' //mutated object but pointing to same memory
console.log(obj.a)


const constObj = {}

constObj.a = 'a'

// shadowing
// where new var with same var name it replaces the old one

var thisIsAVar = 50
thisISAvar = 51

var thisISAVar = 'new value !'
console.log(thisISAVar)


function thisIsHoisted() {
    console.log('this is a function declared at the bottom of a file')

}

const thisIsNotHoisted = function(){
    console.log('should this  be hoisted ?')

}
























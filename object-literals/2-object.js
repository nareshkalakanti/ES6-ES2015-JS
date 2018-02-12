
// using new  keyword

const o = new Object ()
o.firstName = "Naresh"
o.lastName = "kumar"
o.isTeaching = true
o.greet = function () {
    console.log("hi !")
}

// using object literal
const o2 = { }
o2.firstName = 'Naresh'
//index in objects inside bracket put value that would be key
o2['lastName']= 'Kumar'
const key = "isTeaching"
o2[key] = true
o2['greet'] = function () {
    console.log('hi !')

}
// nest object : object within an object
//Everything would be cast to string
const o3 = {
    firstName : 'Naresh',
    lastName : 'Kumar',
    isTeaching:true,
    greet: function () {
        console.log('hi!')
    },
    address : {
    street : 'Station Way',
    number: 123,
    },
}


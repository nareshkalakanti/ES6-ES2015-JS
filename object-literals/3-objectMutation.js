

const o = {
    a: 'a', // a get a
    b : 'b' , // b gets b
    obj : {
        key: 'key',
    },
    }
    //Object.assign basically says pass a bunch of arguments and every single argument will merge in previous one

//Shallow copy which is just grabbing the keys and values of some object and setting
// those blindly into some other objects as opposed to what would be called a deep copy
//where that would take the keys and values and then if the values are objects it would also take those
//objects keys and values do that recursively and basically get every single layer deep clone but since object assigned
//takes the keys and values dumbly if we have an object in there update that objects key o and
const o2  = Object.assign({}, o)


o2.obj.key = 'new value'

console.log(o2.obj.key)

// console.log(o.a)

// console.log(o2.a)

//deep copy

function deepCopy(obj) {
    //check if vals are obj
    //if so copy that object (deep copy)
    //else return the value
    const keys = Object.keys(obj)
    const newObject = {}
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i]
        if (typeof obj[key] === 'object') {
            newObject[key] = deepCopy(obj[key])
        } else {
            newObject[key] = obj[key]
        }
        // return Object.assign({},obj)
        return newObject
    }

    const o3 = deepCopy(o)

    o.obj.key = 'new key !'

    console.log(o3.obj.key)
}










const  firstname = "Naresh";
const lastname = 'kumar'

const val = 42

const arr = [
    'string',
    42,
    function () {
    console.log('hi')
    },
]

//access thing in arrays
//Grab the function execute the function from array
arr[2]()

// console log from array using let
// for give me a variable thats called i that starts at 0 and
// while its less than the values in that array i.e array.length just keep incrementing every single time

for (let i=0; i<arr.length; i++ ){
console.log(arr[i])
}


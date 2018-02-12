
const url = ''

//fetch returns promise

fetch(url)  // .then that takes response and does something with it
    .then(function (res) {        //handle error ?
        return res.json() // extract json from result
    })
    .then(function (json) {
        return ( {
        importantData:json.importantData,
    })
    .then(function (data) {
        console.log(data)
    })
    .catch(function (err) {
        //handle error
    })

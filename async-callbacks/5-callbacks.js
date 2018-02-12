function doSomethingAsync(callback) {
   setTimeout(function(){
       callback(1)},1000)
        //1 invoke console.log with 1
        // async so setTimeout or we pass in a func to handle the value
}

doSomethingAsync(console.log)
//run out of stack

function recurse() {
    console.log('recursion')
    return recurse()
}

recurse()
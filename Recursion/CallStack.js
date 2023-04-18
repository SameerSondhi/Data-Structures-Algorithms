//Prints "Three" in the console
function funcThree() {
    console.log('Three')
}

//Calls funcThree and also prints "Two" in the console
function funcTwo() {
    funcThree()
    console.log('Two')
}

//Calls funcTwo and also prints "One" in the console
function funcOne() {
    funcTwo()
    console.log('One') 
}

//Starts the stack by first calling funcTwo, which calls funcThree before printing anything
funcOne()
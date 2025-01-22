let score = "33abc"
console.log(typeof(score));
console.log(typeof score)

let valueIntNumber = Number(score)
console.log(typeof valueIntNumber)


console.log(valueIntNumber)


// if pure number is written indside a string example "33" it can be coverted into a number easily in proper number
// but on the other side if my string contains "35abc"  which while type comversion wil be done but the output will be as NAN(not a number)
//but the type of NAN is number 

//1 boolean converts it into true and if empty string is passed then the boolean returns a value as false
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn)



 //conversion of string
 let someNumber = 33
 let randomString = String(someNumber)
 console.table([typeof(randomString),randomString])

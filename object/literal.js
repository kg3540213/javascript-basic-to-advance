"use strict"
// OBJECT LITERAL(NOT SINGELTON)
// how i use symbol inside object
const sym=Symbol("123")
let myObj={
    name:"Avik",
    [sym]:1,
    age:20,
    "email":"avik@gmail.com",
    job:"google",
    days:[1,2,3]
}
// console.log(myObj.name)
// console.log(myObj["email"])
// console.log(myObj[sym]) check through in symbol
console.log(myObj.days[0])

// myObj.greet=function(){
//     console.log("Hello js user")
// }
// myObj.greet()

// myObj.greettwo=function(){
//     console.log(`Hello js user ${this.name}`)
// }
// console.log(myObj.greettwo())



// console.log(myObj)



// if i want to dont change in my object if i upate anything
// Object.freeze(myObj)









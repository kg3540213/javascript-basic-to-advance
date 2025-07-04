// IN JAVASCRIPT "", UNDEFINED ARE FALSE WE MAINTAIN THE PROCEDURE
function message(n1,n2,n3){
    // if(!n1) console.log("Enter value")  and n1 === undefined both are same
    // else console.log(n1)

}
// message(1,2,'1')


// HOW I  TAKE MULTIPLE VALUES IN FUNCTION
function multipleval(...n) {
    return n;
}
// console.log(multipleval(1,2,3)) return as a array


// pass obj in function
// function getobj(anyobject){
//     console.log(`${anyobject.age} is ${anyobject.username} age`)

// }
// getobj({
//     username:"koushik",
//     age:20

// })


// pass arr in function
// getarr([1,2])
// function getarr(getArray){
//     console.log(getArray[0])

// }






// arr([1,2])  its given error
const arr = (getArray)=>{
    return getArray[0]
    
}
arr([1,2])


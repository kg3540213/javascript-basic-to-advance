const obj={
    name:"Koushik",
    age:20,
    login:function(){
        // console.log(`Now login ${this.name}`)
        // console.log(this)  BASICALLY THIS REFER THE CURRENT CONTEXT
    }
}
// obj.login()
// console.log(this)  => empty object print but in console its print windows data




function chai(a=1) {

    // console.log(a)
    // console.log(this.a) => undefined
}
chai(2)



// const add= (n1,n2) => {
//     return n1+n2
    
// }

// const add= (n1,n2) => n1+n2 implicit return
// const add= (n1,n2) => (n1+n2)

// const add = () => ({name:"Ram"}) method of return object
    
console.log(add())




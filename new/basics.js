function user(name,age){
    this.name = name
    this.age = age
    return this

}
const userOne = new user("Koushik",20)
const userTwo = new user("Avik",16)
console.log(userOne)

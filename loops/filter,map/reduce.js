// used for doing total sum
const arr=[1,2,5,7,0]
// first accumilator initital value is 0, then step by step accu=accu+currVal
// const totalSum = arr.reduce((accu,currVal) => accu+currVal,0)
const totalSum = arr.reduce((accu,currVal) => {
    console.log(`accu = ${accu} and currval = ${currVal}`)
    return accu+currVal
},0)
console.log(totalSum)
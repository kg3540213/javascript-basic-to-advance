"use stirct"
const ar1=[1,2,3,4]
const ar2=[5,6,7,8]
// ar1.push(ar2)  show array inside array

// let ar3=ar1.concat(ar2) convert in one array but use a arr variable

// spread method=> many array convert in one array
// const ar4=[...ar1,...ar2]

// if in one array exist many subarrays, and i want to convert in one array
const bigArr=[1,2,[3,4],[5,[6,7]]]
console.log(bigArr.flat(Infinity)) 

// array or not and convert to array
// console.log(Array.isArray("ram"))
// console.log(Array.from("ram"))


let s1=100,s2=200,s3=300
// console.log(Array.of(s1,s2,s3))







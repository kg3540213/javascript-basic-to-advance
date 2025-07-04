// in foreach we dont do return

// filter works in condition base
// const arr=[1,2,5,7,0]
// const val=arr.filter((item) => item>4 && item!=5)
// console.log(val)


// map works in operation base
const arr=[1,2,5,7,0]
const val=arr
          .map((item) => item*4)
          .map((item) => item/10)
console.log(val)
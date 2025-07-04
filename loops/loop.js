const arr=[1,2,3]
// for (const ele of arr) {
//     console.log(ele)
// }

// for (const key in arr) {
//     console.log(arr[key])
    
// }

// MAP iterating possible only using forof loop
const map = new Map()
map.set(1,"INDIA")
map.set(2,"USA")
map.set(3,"ENGLAND")

for (const [key,val] of map) {
    // console.log(key) print as a array
    // console.log(key + " " + val)

}


// OBJECT iterating possible only using forin loop
// const myObj={
//     name:"Koushik",
//     age:20
// }
// for (const key in myObj) {
//     console.log(key + " " + myObj[key])

// }


// FOR EACH
// const newArr=[2,5,1]
// newArr.forEach(function(item){
//     console.log(item)
// })

// newArr.forEach((item,index,arr)=>{
//     console.log(item,index,arr)
// })


// function print(item){
//     console.log(item)

// }
// newArr.forEach(print)


const arrObj=[
    {
        name:"Avik",
        age:16
    },
    {
        name:"Koushik",
        age:20
    }
]
arrObj.forEach(function(item){
    console.log(item["age"])

})


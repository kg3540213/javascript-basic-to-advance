// SINGELTON
// const obj=new Object()
const obj={}
obj.id=1
obj.name="koushik"

// console.log(Object.keys(obj)) it print as a array
// console.log(Object.values(obj))
// console.log(Object.entries(obj))

// object inside object
const insobj={
    id:1,
    fullname:{
        username:{
            firstname:"Avik"
        }
    }
}
// console.log(insobj.fullname.username.firstname)

// merge objects
const o1={1:'a',2:'b'}
const o2={3:'a',4:'b'}
const o3={4:'a',5:'b'}
// const o4={o1,o2}
// const o4=Object.assign({},o1,o2,o3) sob obj empty er moddhe jacche, basically okhNE JE THakbe tate sob dhukbe
// const o4={...o1,...o2,...o3}
// console.log(o4)


// ARRAY INSIDE OBJECTS
const arr=[
    {
        1:12,
        2:22
    },
    {
        3:33,
        4:44
    }
]
// console.log(arr[0]["1"])
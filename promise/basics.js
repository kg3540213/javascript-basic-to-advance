const promiseOne = new Promise(function(resolve,reject) {
    // DO AN ASYNC TASK
    // DB CALLS, CRYPOTOGRAPHY, NETWORK
    setTimeout(function(){
        console.log("Async task completed")
        resolve()

    })
})
promiseOne.then(function(){
    console.log('promise consumed');
})



new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({name:'koushik',age:20})
        } else {
            reject('Something is wrong')
        }

    },1000)
}).then((user)=>{
    // console.log(user.name)
    return user.name
}).then((name)=>{
    console.log(name)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log('completed')
})




// ASYNC WAIT
const promise=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({name:'avik',age:20})
        } else {
            reject('Something is wrong')
        }

    },1000)
})

async function consumePromise(){
    try{
        const response = await promise
        console.log(response)
    } catch(error) {
        console.log(error)
    }
}

consumePromise()




// DATA FETCH FROM API
async function user(){
    try {
        const res = await fetch('https://api.github.com/users/koushikghosh')
        const data = await res.json.parse()
        console.log(typeof data,data)
        
    } catch (error) {
        console.log(error)
        
    }
}
user()




// USING THEN
fetch('https://api.github.com/users/koushikghosh')
.then(function(res) {
    return res.json()
})
.then(function(data){
    console.log(data)
})
.catch(function(error){
    console.log(error)
})


// Promise Create
const promiseOne = new Promise(function(resolve,reject) {
    // Do an async task
    //DB Calls,cryptography , ntework
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    } ,1000)
})

promiseOne.then(function(){
    // console.log("Promise Consumed");
})


new Promise(function(resolve,reject) {
    setTimeout(function(){
        console.log("Async task two")
        resolve()
    } , 1000)
})
.then(function(){
    console.log("Async two resolved")
})


const promiseThree = new Promise(function(resolve,reject) {
    setTimeout(function(){
        resolve({
            username : 'priya',
            email : 'priya@google.com'
        })
    } , 1000)
})
promiseThree.then(function(user){
    console.log(user)
})


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({
                username : 'priya',
                password : '123'
            })
        }
        else{
            reject('ERROR : Something Went Wrong')
        }
    } , 1000)
})
promiseFour
.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
 }).finally(() => console.log("The Promise is either resolve or rejected"))


const promiseFive = new Promise(function(resolve, reject){
     setTimeout(function(){
        let error = true
        if(!error){
            resolve({
                username : 'js',
                password : '123'
            })
        }
        else{
            reject('ERROR : JS Went Wrong')
        }
    } , 1000)
});
async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    }
    catch(error){
        console.log(error)
    }
    
}
consumePromiseFive()


// async function getAllUsers(){
//     try{
//         const response = await fetch('https://api.github.com/users')
//         const data = await response.json()
//         console.log(data)
//     }catch(error){
//         console.log("E: " , error);
//     }
    
// }

// getAllUsers()


fetch('https://api.github.com/users')
.then((response)=>{
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

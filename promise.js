console.log('hi');
const myPromise =  new Promise(( resolve, reject)=>{
    let a =6;
//performing the asynchronous operations
if(/* operation succ*/ a==6){
    resolve(result)
}
else{
    reject(error)
}
})

//consuming a promise
myPromise.then((result)=>{
console.log('');
return result;
}).then((result)=>{
    console.log('')
})
.catch((error)=>{
console.log('')
})
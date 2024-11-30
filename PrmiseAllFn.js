const promiseArray=[p1,p2,p3];

Promise.all(promiseArray)
.then((result)=>{
console.log(result);
}).catch((err)=>{
    console.log(err);
})
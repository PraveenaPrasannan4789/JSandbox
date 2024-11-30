const fetchData= new Promise((resolve,reject)=>{
    setTimeout(()=>{
const status=true;
if(status){
    const data={name:"Praveena",age:30};
    resolve(data);
}
else{
    reject("Failed to fetch data");
}
    },2000)
});


fetchData.then((result)=>{
    console.log(`Name:${result.name}, Age: ${result.age}`);
    return result.age;
}).then((age)=>{
    console.log(`In 5 years you will be ${age} years old`)
}). catch((err)=>{
    console.log(`Error: ${err}`);
    })
//fibonacci  5
//0 1 1 2 3 

// const fibonacci=(number)=>{
// let a=0,b=1;
// const arry=[];
// for(i=1;i<=number;i++){
// if(i==1){
//     arry.push(a);
// }
// else if(i==2){
// arry.push(b);
// }
// else{
//     let next=a+b;
//     a=b;
//     b=next;
//     arry.push(b)
// }}
// return arry;
// }

// console.log(fibonacci(5));

//Reverse string 
// const reverseString=(str)=>{
// const reverse= str.split('').reverse().join('');
// let rev='';
// for(let i=str.length-1;i>=0;i--){
// rev+=str[i];
// }
// return rev;
// }

// console.log(reverseString('i love india'));

//remove duplicates
// const removeDuplicate =(arr)=>{
// const uni=[];
// for(let i=0;i<arr.length-1;i++){
//     if(uni.indexOf(arr[i])===-1){
//         uni.push(arr[i]);
//     }
// }
// return uni;
// }

// console.log('unique elements', removeDuplicate([1,4,5,5,4]));

//function closures

// const someFn=(n)=>{
//     const secret=n;
//    function sec(){
//     console.log(secret);
//    }
//    return sec;
// }

// const test= someFn('secret');
// test();
// someFn();

// const human=(n)=>{
//     const name =n;
//     function sayHi(){
//         console.log(`my name is ${name}`)
//     }
//     function sayHowareyou(){
//         console.log(`i am good ${name}`)
//     }
//     return{
//         sayHi,
//         sayHowareyou
//     }
// }

// const sina= human("sina");
// const quoli= human("quoli");

// sina.sayHi();
// quoli.sayHowareyou();

//cloning an object in JS
// let obj={
//     name:"ammu",
//     age:23
// }
// let obj1= Object.assign({},obj)
// let obj2= {...obj}
// obj2.age=89;
// obj1.age=45;
// console.log(obj,obj2); 


//finding the most common string in an array

// const mostCommonString=(string)=>{
// const newString= string.split(' ');
// console.log('neee', newString)
// const commonString= newString.reduce((acc,e)=>{
// console.log('aac',acc,e,acc[e]);
//  acc[e] = acc[e]? acc[e]+1:1;
//  return acc;
// },{});

// const max= Object.entries(commonString);
// console.log('maxxx',max);
// const maxValue= max.reduce((acc,el)=>{
// acc=acc[1]>el[1]? acc:el;
// return acc;
// },[null,0])[0];
// console.log('maxxVal',maxValue);
// return commonString;
// }

// console.log("common string",mostCommonString('i am ammu i am ammu i'));
// const name='saikrishna';
// age=21;

// console.log(delete name);
// console.log(delete age);

// const str= "abc" - - 5;
// console.log('str',str);

// var objA={prop:42};
// var objB= objA;
// objB={};
// console.log(objA,objB)
// console.log(null+20);

function x(a=5,b=10){
    console.log(a+b,a,b);
}

x(20)
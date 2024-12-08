const obj3={
    name:"ammu",
    age:"20"
}

const newObj= Object.create(obj3); //add prototype and property to object and return empty object
console.log('obj3',obj3);
console.log('newObj',newObj);
obj3.hhh='jjjjjj';
console.log('obj3 now',obj3);
console.log('newObj now',newObj.hhh);
// const newObj= Object.assign({},obj3); copies properties to the target obj
// console.log('obj3',obj3);
// console.log('newObj',newObj);
// obj3.hhh='jjjjjj';
// console.log('obj3 now',obj3);
// console.log('newObj now',newObj);


// const newObj= {...obj3}; //copies properties to the target obj
// console.log('obj3',obj3);
// console.log('newObj',newObj);
// obj3.hhh='jjjjjj';
// console.log('obj3 now',obj3);
// console.log('newObj now',newObj);

